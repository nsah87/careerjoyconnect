import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "../utils/imageUtils";
import { toast } from "sonner";

const Navigation = () => {
  const location = useLocation();
  const [logoUrl, setLogoUrl] = useState("/lovable-uploads/ea0c5a3c-5ef4-43c9-8954-7c416a7d72ee.png");
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const processLogo = async () => {
      try {
        const response = await fetch(logoUrl);
        const blob = await response.blob();
        const img = await loadImage(blob);
        const processedBlob = await removeBackground(img);
        const processedUrl = URL.createObjectURL(processedBlob);
        setLogoUrl(processedUrl);
      } catch (error) {
        console.error("Error processing logo:", error);
        toast.error("Failed to process logo image");
      }
    };

    processLogo();
  }, []);
  
  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={logoUrl} 
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
                : "text-gray-300 hover:bg-primary-dark hover:text-white"
            }`}
          >
            Resume & Cover Letter
          </Link>
          <Link
            to="/interview"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/interview")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-primary-dark hover:text-white"
            }`}
          >
            Interview Practice
          </Link>
          <Link
            to="/companion"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/companion")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-primary-dark hover:text-white"
            }`}
          >
            Career Companion
          </Link>
          <Link
            to="/insights"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive("/insights")
                ? "bg-secondary text-white"
                : "text-gray-300 hover:bg-primary-dark hover:text-white"
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