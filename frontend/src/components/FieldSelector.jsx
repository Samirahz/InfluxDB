import { useState } from "react";

const dummyFields = [
    { type: "TAG", name: "location" },
    { type: "TAG", name: "sensor_id" },
    { type: "FIELD", name: "temperature" },
    { type: "FIELD", name: "humidity" },
    { type: "TAG", name: "building" },
    { type: "FIELD", name: "pressure" },
    { type: "TAG", name: "room" },
    { type: "FIELD", name: "battery_level" },
    { type: "TAG", name: "device_type" },
    { type: "FIELD", name: "signal_strength" },
    { type: "FIELD", name: "cpu_usage" },
];

export default function FieldSelector() {
    const [search, setSearch] = useState("");
    const filteredFields = dummyFields.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="card">
            <div className="card-title">Available Fields & Tags</div>
            <div className="form-group">
                <input type="text"
                    className="search-box"
                    placeholder="Search fields and tags..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="available-fields">
                {filteredFields.map((field, index) => (
                    <div key={index} className="field-item" draggable="true">
                        <span className={`field-type ${field.type === "TAG" ? "tag" : ""}`}>
                            {field.type}
                        </span>
                        <span>{field.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}