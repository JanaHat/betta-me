import DashboardCard from "../components/DashboardCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Your Summary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <DashboardCard title="Weight" value={68.5} unit="kg" />
        <DashboardCard title="Mood" value="😊" color="bg-yellow-500" />
        <DashboardCard title="Focus Time" value={2.5} unit="hrs" color="bg-green-600" />
      </div>
    </div>
  );
}
