export default function QueryBuilder({ selectedFields, onFieldDrop, onFieldRemove }) {
    // handle drop event
    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("application/json");
        if (data) {
            const field = JSON.parse(data);
            if (onFieldDrop) onFieldDrop(field);
        }
    };

    return (
        <div className="card">
            <div className="card-title">Query Builder</div>
            <div className="form-group">
                <label className="form-label">Selected Fields</label>
                <div
                    className="drag-drop-area"
                    onDragOver={e => e.preventDefault()}
                    onDrop={handleDrop}
                    style={{ minHeight: 60, border: "2px dashed #3182ce", borderRadius: 8, padding: 8 }}
                >
                    <div style={{ color: "#888", fontSize: 13 }}>
                        Drag fields here to build your query
                    </div>
                    <div className="selected-fields">
                        {selectedFields && selectedFields.length === 0 && (
                            <div style={{ color: "#bbb", fontSize: 12 }}>No fields selected</div>
                        )}
                        {selectedFields && selectedFields.map((field, idx) => (
                            <div key={idx} className="selected-field-item" style={{ display: "flex", alignItems: "center", margin: "4px 0" }}>
                                <span className={`field-type ${field.type === "TAG" ? "tag" : ""}`} style={{ marginRight: 8 }}>
                                    {field.type}
                                </span>
                                <span style={{ marginRight: 8 }}>{field.name}</span>
                                <button
                                    className="btn btn-xs btn-danger"
                                    style={{ marginLeft: "auto" }}
                                    onClick={() => onFieldRemove(field)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
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
