import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { passwordResetFormControls } from "@/config"; // Define this in your config
import { resetPassword } from "@/store/auth-slice"; // Define this action in your auth-slice
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
};

function AuthPasswordReset() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(resetPassword(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Reset Your Password
        </h1>
        <p className="mt-2">
          Remembered your password?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Sign In
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={passwordResetFormControls} // Define this in your config
        buttonText={"Reset Password"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthPasswordReset;
