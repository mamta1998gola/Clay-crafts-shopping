import { Button } from "@/components/ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Milk,
  GlassWater,
  CookingPot,
  Coffee,
  Amphora,
  TreePalm,
  BrickWall,
  Factory,
  Salad,
  Tent,
  House,
  LandPlot,
  Shell,
  Target,
  Blocks,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";


const categoriesWithIcon = [
  { id: "claybottle", label: "Clay bottle", icon: Milk },
  { id: "clayglass", label: "Clay glass", icon: GlassWater },
  { id: "claytoys", label: "Clay toys", icon: Blocks },
  { id: "clayutensils", label: "Clay utensils", icon: CookingPot },
  { id: "clayjug", label: "Clay jug", icon: Coffee },
  { id: "waterpot", label: "Water pot", icon: Amphora },
  { id: "tableplanter", label: "Table top planter", icon: TreePalm },
];

const brandsWithIcon = [
  { id: "sachii", label: "Terracotta by Sachii", icon: Amphora },
  { id: "mitticool", label: "Mitticool", icon: BrickWall },
  { id: "gola", label: "Gola's", icon: Target },
  { id: "indus", label: "Indus Valley", icon: Factory },
  { id: "maestros", label: "Craft Maestros", icon: Salad },
  { id: "craftindia", label: "Clay Craft India", icon: Tent },
  { id: "kumhargram", label: "Kumhargram", icon: House },
  { id: "ethnicindian", label: "The Indian Ethnic Co.", icon: LandPlot },
  { id: "zishta", label: "Zishta", icon: Shell },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/listing-page`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    toast({
      title: "You need to log in to add products to the cart.",
    });
    navigate("/auth/login");
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden" data-testid="feature-image-slider">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
            <img
              src={slide?.image}
              key={index}
              data-testid={`feature-image-${index}`}
              className={`${index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
            />
          ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
          data-testid="slider-prev-button"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
          data-testid="slider-next-button"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <h1 className="text-4xl font-extrabold text-center my-8 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg" data-testid="main-heading">
        Clay Crafts: Your One-Stop Shop for Handcrafted Clay Products
      </h1>

      <section className="py-12 bg-gray-50" data-testid="category-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
                data-testid={`category-card-${categoryItem.id}`}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50" data-testid="brand-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                key={brandItem.id}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                data-testid={`brand-card-${brandItem.id}`}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12" data-testid="feature-products-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                <ShoppingProductTile
                  key={productItem._id}
                  handleGetProductDetails={handleGetProductDetails}
                  product={productItem}
                  handleAddtoCart={handleAddtoCart}
                  data-testid={`product-tile-${productItem._id}`}
                />
              ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
        data-testid="product-details-dialog"
      />
    </div>
  );
}

export default ShoppingHome;
