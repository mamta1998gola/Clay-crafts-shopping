import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 text-center">
      <Helmet>
        <title>404 Page Not Found | YourSiteName</title>
        <meta name="description" content="The page you are looking for does not exist. Explore other pages on our site." />
      </Helmet>
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you're looking for does not exist.
      </p>
      <div className="mt-8 flex flex-col md:flex-row md:justify-center md:space-x-6">
        <Helmet>
          <meta property="og:title" content="Clay Crafts: Your One-Stop Shop for Authentic Earthen Pots, Clay Toys, and Utensils | Handcrafted Clay Products" />
        </Helmet>
        <Link
          to="/"
          className="text-blue-500 underline text-lg md:text-xl hover:text-blue-700 transition-colors"
          onClick={() => {
            document.title = "Clay Crafts: Your One-Stop Shop for Authentic Earthen Pots, Clay Toys, and Utensils | Handcrafted Clay Products";
          }}
        >
          Go to Home
        </Link>
        <Helmet>
          <meta property="og:title" content="Clay Crafts: Your One-Stop Shop for Authentic Earthen Pots, Clay Toys, and Utensils | Handcrafted Clay Products" />
        </Helmet>
        <Link
          to="/about-us"
          className="text-blue-500 underline text-lg md:text-xl hover:text-blue-700 transition-colors"
          onClick={() => {
            document.title = "Clay Crafts: Your One-Stop Shop for Authentic Earthen Pots, Clay Toys, and Utensils | Handcrafted Clay Products";
          }}
        >
          About Us
        </Link>
        <Helmet>
          <meta property="og:title" content="Clay Crafts: Your One-Stop Shop for Authentic Earthen Pots, Clay Toys, and Utensils | Handcrafted Clay Products" />
        </Helmet>
        <Link
          to="/contact-us"
          className="text-blue-500 underline text-lg md:text-xl hover:text-blue-700 transition-colors"
          onClick={() => {
            document.title = "Clay Crafts: Your One-Stop Shop for Authentic Earthen Pots, Clay Toys, and Utensils | Handcrafted Clay Products";
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
