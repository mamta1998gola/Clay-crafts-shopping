import { Outlet, useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function AuthLayout() {
  const navigate = useNavigate(); // Hook to access the navigate function

  const handleHomeClick = () => {
    navigate('/public-view'); // Navigate to /public-view
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex flex-col items-center justify-center bg-black w-1/2 px-12 py-6">
        {/* Home Button */}
        <button
          data-cy="redirect-to-home"
          onClick={handleHomeClick} 
          className="mb-6 px-4 py-2 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition"
        >
          Home
        </button>
        <div className="max-w-md space-y-6 text-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {`Welcome to Clay Crafts`}
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
