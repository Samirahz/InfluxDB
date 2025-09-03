import DashboardTabs from "./DashboardTabs";
import QuerySection from "./QuerySection";
import VisualisationSection from "./VisualisationSection";

export default function Dashboard() {
  return (
    <div className="container">
      <DashboardTabs />
      <div className="main-content">
        <QuerySection />
        <VisualisationSection />
      </div>
    </div>
  );
}
