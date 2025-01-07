import { BarChart as BarChartIcon, Target, TrendingUp, Clock } from "lucide-react";

const Insights = () => {
  const metrics = [
    {
      title: "Resume Score",
      value: "85/100",
      change: "+5",
      icon: <BarChartIcon className="w-6 h-6" />,
    },
    {
      title: "Interview Readiness",
      value: "78%",
      change: "+12",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Applications Sent",
      value: "24",
      change: "+3",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Practice Hours",
      value: "12.5",
      change: "+2.5",
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Session Insights Hub
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  {metric.icon}
                </div>
                <span className="text-green-500 text-sm font-semibold">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Recent Activities
            </h2>
            <div className="space-y-4">
              {[
                "Completed mock interview session",
                "Updated resume with new experience",
                "Received feedback on cover letter",
                "Practiced behavioral questions",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  {activity}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Next Steps
            </h2>
            <div className="space-y-4">
              {[
                "Schedule technical interview practice",
                "Review updated resume draft",
                "Complete LinkedIn profile optimization",
                "Prepare for upcoming mock interview",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;