export default function ChartContainer({ activeTab, chartType, grafanaPanel }) {
    return (
        <div className="chart-container">
            {/* always show the chart or table based on the active tab */}
            {activeTab === "chart" ? (
                grafanaPanel?.panelUrl ? (
                    <div className="grafana-embed">
                        <iframe
                            title="Grafana Panel"
                            src={grafanaPanel.panelUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                        />
                    </div>
                ) : (
                    // placeholder for chart when no Grafana panel is available
                    <div className="chart-placeholder">
                        📈 {chartType.toUpperCase()} Visualization - Full Width View
                        <div>Run a query to render with Grafana</div>
                    </div>
                )
            ) : (
                // placeholder for table view
                <div className="table-placeholder">
                    📊 Table View of Results
                    <div>(Dummy data table here)</div>
                </div>
            )}
        </div>
    );
}
