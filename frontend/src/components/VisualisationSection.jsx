import { useState } from "react";
import ChartContainer from "./ChartContainer";
import ChartControls from "./ChartControls";
import FluxCodePanel from "./FluxCodePanel";

export default function VisualizationSection() {
    const [activeTab, setActiveTab] = useState("chart");
    const [chartType, setChartType] = useState("line");
    const [showFlux, setShowFlux] = useState(false);

    return (
        <div className="visualization-section">
        <div className="card visualization-panel">

            <div className="tabs">
            <div
                className={`tab ${activeTab === "chart" ? "active" : ""}`}
                onClick={() => setActiveTab("chart")}
            >
                Chart View
            </div>
            <div
                className={`tab ${activeTab === "table" ? "active" : ""}`}
                onClick={() => setActiveTab("table")}
            >
                Table View
            </div>
            </div>

            <ChartControls chartType={chartType} setChartType={setChartType} />
            <ChartContainer activeTab={activeTab} chartType={chartType} />
            <FluxCodePanel showFlux={showFlux} setShowFlux={setShowFlux} />

            <div className="btn-group" style={{ marginTop: "16px" }}>
            <button className="btn btn-primary">Export to Grafana</button>
            <button
                className="btn btn-secondary"
                onClick={() => navigator.clipboard.writeText("flux query code here")}
            >
                Copy Flux Code
            </button>
            </div>
        </div>
        </div>
    );
}
