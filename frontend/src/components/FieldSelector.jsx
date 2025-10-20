import { useEffect, useState } from "react";
import { fetchWithAuth } from "../utils/fetchWithAuth";

export default function FieldSelector({ bucket, measurement, onFieldDragStart }) {
    const [search, setSearch] = useState("");
    const [fields, setFields] = useState([]);
    const [expandedTags, setExpandedTags] = useState({}); // { tagKey: bool }
    const [tagValues, setTagValues] = useState({}); // { tagKey: string[] }

    useEffect(() => {
        const fetchFields = async () => {
            try {
                const response = await fetchWithAuth(
                    `http://localhost:5001/api/influx/fields/${bucket}/${measurement}`
                );
                const data = await response.json();
                setFields(data);
                setExpandedTags({});
                setTagValues({});
            } catch (error) {
                console.error('Error fetching fields:', error);
                setFields([]);
                setExpandedTags({});
                setTagValues({});
            }
        };
        if (bucket && measurement) fetchFields();
        else { setFields([]); setExpandedTags({}); setTagValues({}); }
    }, [bucket, measurement]);

    const loadTagValues = async (tagKey) => {
        if (!bucket || !measurement || !tagKey) return;
        try {
            const res = await fetchWithAuth(
                `http://localhost:5001/api/influx/tag-values/${bucket}/${measurement}/${encodeURIComponent(tagKey)}?q=${encodeURIComponent(search)}`
            );
            const data = await res.json();
            setTagValues(prev => ({ ...prev, [tagKey]: data.values || [] }));
        } catch (e) {
            console.error("Error loading tag values", e);
            setTagValues(prev => ({ ...prev, [tagKey]: [] }));
        }
    };

    const filteredFields = fields.filter(f =>
        f.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="card">
            <div className="card-title">Available Fields & Tags</div>
            <div className="form-group">
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search fields and tags..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="available-fields">
                {filteredFields.map((item, index) => {
                    if (item.type === "FIELD") {
                        return (
                            <div
                                key={`field-${index}`}
                                className="field-item"
                                draggable="true"
                                onDragStart={e => {
                                    const payload = { type: "FIELD", name: item.name };
                                    e.dataTransfer.setData("application/json", JSON.stringify(payload));
                                    if (onFieldDragStart) onFieldDragStart(payload);
                                }}
                            >
                                <span className="field-type">FIELD</span>
                                <span>{item.name}</span>
                            </div>
                        );
                    }

                    // TAG row with expand/collapse
                    return (
                        <div key={`tag-${index}`} className="tag-block">
                            <div
                                className="field-item"
                                onClick={async () => {
                                    const next = !expandedTags[item.name];
                                    setExpandedTags(prev => ({ ...prev, [item.name]: next }));
                                    if (next && !tagValues[item.name]) {
                                        await loadTagValues(item.name);
                                    }
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="field-type tag">TAG</span>
                                <span>{item.name}</span>
                                <span style={{ marginLeft: "auto", color: "#888" }}>
                                    {expandedTags[item.name] ? "▾" : "▸"}
                                </span>
                            </div>

                            {expandedTags[item.name] && (
                                <div className="tag-values-list" style={{ marginLeft: 16 }}>
                                    {(tagValues[item.name] || []).map((val, i) => (
                                        <div
                                            key={`tagval-${item.name}-${i}`}
                                            className="field-item tag-value-item"
                                            draggable="true"
                                            onDragStart={e => {
                                                const payload = { type: "TAG_VALUE", key: item.name, value: val };
                                                e.dataTransfer.setData("application/json", JSON.stringify(payload));
                                            }}
                                            title={`${item.name}=${val}`}
                                        >
                                            <span className="field-type tag">VAL</span>
                                            <span>{val}</span>
                                        </div>
                                    ))}
                                    {(tagValues[item.name] || []).length === 0 && (
                                        <div className="muted" style={{ margin: "4px 0 8px 0" }}>
                                            No values
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}