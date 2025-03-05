import { dashboardData } from "./list/admindashboard"
import { Card, CardContent } from "@/components/ui/card"
const QuickStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
    {dashboardData.stats.map((stat, index) => (
      <Card key={index}>
        <CardContent className="pt-6 flex items-center space-x-4">
          {stat.icon}
          <div>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">{stat.value}</span>
              <span className={`text-xs ${stat.color}`}>
                {stat.percentage}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}

export default QuickStats