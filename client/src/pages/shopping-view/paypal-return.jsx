import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment, createInvoice } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");
  const { toast } = useToast();
  const { user } = useSelector((state) => state.auth);

  function sendInvoice(orderId) {
    dispatch(createInvoice({ orderId, customerEmail: user?.email || 'prabhat7660403@gmail.com' }))
      .then(response => {
        if (response.payload?.success) {
          toast({
            title: response.payload?.message || "Order email sent successfully",
          });
          window.location.href = "/shop/payment-success";
        } else {
            throw new Error('Failed to send order email');
        }
      })
      .catch(err => {
        throw new Error("Failed to send order invoice: ", err);
      })
  }

  useEffect(() => {
    if (paymentId && payerId) {
      const orderId = JSON.parse(sessionStorage.getItem("currentOrderId"));

      dispatch(capturePayment({ paymentId, payerId, orderId })).then((data) => {
        if (data?.payload?.success) {
          sendInvoice(orderId);
          sessionStorage.removeItem("currentOrderId");
        }
      });
    }
  }, [paymentId, payerId, dispatch]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing Payment...Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaypalReturnPage;
