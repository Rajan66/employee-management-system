import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface Stat {
  label: string;
  value: string | number;
  color?: string;
}

interface StatCardProps {
  title: string;
  icon?: ReactNode;
  stats: Stat[];
}

const StatCard: React.FC<StatCardProps> = ({ title, icon, stats }) => {
  return (
    <Card className="bg-sky-100 dark:bg-zinc-950">
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between">
            <span>{stat.label}</span>
            <span className={stat.color || ""}>{stat.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StatCard;
