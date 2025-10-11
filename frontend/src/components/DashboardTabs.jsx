export default function DashboardTabs({ dashboards, activeId, onSetActive, onAdd, onRemove }) {
    return (
        <div className="dashboard-tabs">
            {dashboards.map(d => (
                <div
                    key={d.id}
                    className={`dashboard-tab ${d.id === activeId ? "active" : ""}`}
                    onClick={() => onSetActive(d.id)}
                >
                    <span>{d.name}</span>
                    {dashboards.length > 1 && (
                        <span
                            className="close-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove(d.id);
                            }}
                        >
                            X
                        </span>
                    )}
                </div>
            ))}

            <div className="add-dashboard-btn" onClick={onAdd}>
                <span>+</span>
                <span>New Dashboard</span>
            </div>

            <div className="dashboard-actions">
                <button className="dashboard-action-btn">Save All</button>
                <button className="dashboard-action-btn">Settings</button>
            </div>
        </div>
    );
}