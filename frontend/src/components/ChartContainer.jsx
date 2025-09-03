export default function ChartContainer({ activeTab, chartType }) {
    return (
        <div className="chart-container">
        {activeTab === "chart" ? (
            <div className="chart-placeholder">
            📈 {chartType.toUpperCase()} Visualization - Full Width View
            <div>Data points: 1,247 | Last updated: 2 min ago</div>
            </div>
        ) : (
            <div className="table-placeholder">
            📊 Table View of Results
            <div>(Dummy data table here)</div>
            </div>
        )}
        </div>
    );
}
