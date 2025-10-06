import { useState } from "react";
import DashboardTabs from "./DashboardTabs";
import QuerySection from "./QuerySection";
import VisualisationSection from "./VisualisationSection";

export default function Dashboard() {
  // hold the selected Grafana panel for export
  const [grafanaPanel, setGrafanaPanel] = useState(null);

  return (
    <div className="container">
      <DashboardTabs />
      {/* Main area */}
      <div className="main-content">
        <QuerySection onExportToGrafana={setGrafanaPanel} />
        <VisualisationSection grafanaPanel={grafanaPanel} />
      </div>
    </div>
  );
}
