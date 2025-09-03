export default function DashboardTabs(){
    return (
        <div className="dashboard-tabs">
            <div className="dashboard-tab active">
                <span>1</span><span>Dashboard</span><span className="close-btn">X</span>
            </div>
            <div className="dashboard-tab">
                <span>2</span><span>Dashboard</span><span className="close-btn">X</span>
            </div>
            <div className="dashboard-tab">
                <span>3</span><span>Dashboard</span><span className="close-btn">X</span>
            </div>
            <div className="add-dashboard-btn">
                <span>+</span><span>New Dashboard</span>
            </div>
            <div className="dashboard-actions">
                <button className="dashboard-action-btn">Save All</button>
                <button className="dashboard-action-btn">Settings</button>
            </div>
        </div>
    );
}