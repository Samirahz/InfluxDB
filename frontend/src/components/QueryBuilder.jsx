export default function QueryBuilder() {
    return (
        <div className="card">
            <div className="card-title">Query Builder</div>
            <div className="form-group">
                <label className="form-label">Selected Fields</label>
                <div className="drag-drop-area">
                    <div>Drag fields here to build your query</div>
                    <div className="selected-fields"></div>
                </div>
            </div>

            <div className="btn-group">
                <button className="btn btn-primary">Run Query</button>
                <button className="btn btn-secondary">Reset</button>
                <button className="btn btn-secondary">Save Query</button>
            </div>
        </div>
    );
}
