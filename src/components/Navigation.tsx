import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/c4a1b998-9447-4e57-a121-6e1c9f9f3da8.png" 
            alt="CareerJoy Connect Logo" 
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/resume"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/resume")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Resume & Cover Letter
          </Link>
          <Link
            to="/interview"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/interview")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Interview Practice
          </Link>
          <Link
            to="/companion"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/companion")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Career Companion
          </Link>
          <Link
            to="/insights"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/insights")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            Insights
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;