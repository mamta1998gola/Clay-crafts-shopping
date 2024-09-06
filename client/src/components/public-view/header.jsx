import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import logo from '../../assets/logo.png';
import { shoppingViewHeaderMenuItems } from "@/config";

function HeaderRightContent({ onCloseMenuSheet }) {
  const navigate = useNavigate();

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      {/* Login Button */}
      <Button
        onClick={() => navigate('/auth/login')}
        variant="solid"
        className="bg-black text-white hover:bg-gray-800"
      >
        Login
      </Button>
    </div>
  );
}

function MenuItems({ onMenuItemClick }) {
  const navigate = useNavigate();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
        getCurrentMenuItem.id !== "products" &&
        getCurrentMenuItem.id !== "search"
        ? {
          category: [getCurrentMenuItem.id],
        }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
        new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
      )
      : navigate(getCurrentMenuItem.path);

    if (onMenuItemClick) {
      onMenuItemClick(); // Close the Sheet
    }
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Label
          onClick={() => handleNavigate(menuItem)}
          className="text-sm font-medium cursor-pointer"
          key={menuItem.id}
        >
          {menuItem.label}
        </Label>
      ))}
    </nav>
  );
}

function ShoppingHeader() {
  const [openMenuSheet, setOpenMenuSheet] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/public-view" className="flex items-center gap-2">
          <img src={logo} alt="Clay Crafts Logo" className="h-10 w-auto" />
          <span className="font-bold">{import.meta.env.VITE_APP_TITLE}</span>
        </Link>
        <Sheet open={openMenuSheet} onOpenChange={(open) => setOpenMenuSheet(open)}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpenMenuSheet(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:w-[70vw] md:w-[60vw] md:max-w-xs">
            <MenuItems onMenuItemClick={() => setOpenMenuSheet(false)} />
            <HeaderRightContent onCloseMenuSheet={() => setOpenMenuSheet(false)} />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
