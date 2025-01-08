import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { supabase } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"

const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()
  const { toast } = useToast()
  
  const isActive = (path: string) => location.pathname === path
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      })
    } else {
      toast({
        title: "Success",
        description: "Signed out successfully!",
      })
      navigate("/login")
    }
  }
  
  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/ea0c5a3c-5ef4-43c9-8954-7c416a7d72ee.png" 
            alt="CareerJoy Connect Logo" 
            className="h-10 w-auto"
          />
        </Link>
        {user && (
          <>
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
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.email}</span>
              <Button
                variant="secondary"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navigation