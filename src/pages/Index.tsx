import { Link } from "react-router-dom";
import { ArrowRight, FileText, MessageSquare, BarChart, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Resume & Cover Letter AI",
      description: "Get AI-powered assistance to craft the perfect resume and cover letter.",
      icon: <FileText className="w-12 h-12 text-secondary" />,
      link: "/resume",
    },
    {
      title: "Interview Practice",
      description: "Practice interviews with AI simulations and get expert feedback.",
      icon: <Users className="w-12 h-12 text-secondary" />,
      link: "/interview",
    },
    {
      title: "24/7 Career Companion",
      description: "Access continuous career support and guidance whenever you need it.",
      icon: <MessageSquare className="w-12 h-12 text-secondary" />,
      link: "/companion",
    },
    {
      title: "Session Insights",
      description: "Track your progress and get personalized recommendations.",
      icon: <BarChart className="w-12 h-12 text-secondary" />,
      link: "/insights",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Boost Your Career with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combine the power of AI with expert coaching to accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h2 className="text-2xl font-semibold text-primary mt-4 mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-secondary group-hover:translate-x-1 transition-transform">
                  <span className="mr-2">Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;