export default function AppDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard title="Active Studies" count={5} color="#4ECDC4" />
        <DashboardCard title="Completed Studies" count={12} color="#FF6B6B" />
        <DashboardCard
          title="Total Earnings"
          count="1,234 ETH"
          color="#F7B801"
        />
        <DashboardCard title="Data Contributions" count={42} color="#7400B8" />
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  count,
  color,
}: {
  title: string;
  count: number | string;
  color: string;
}) {
  return (
    <div
      className="p-6 bg-white neo-brutalism-border neo-brutalism-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-300"
      style={{ borderColor: color }}
    >
      <h3 className="text-xl font-bold mb-2" style={{ color }}>
        {title}
      </h3>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  );
}
