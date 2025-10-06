// imports
import { useState } from "react";
import DataSource from "./DataSource";
import FieldSelector from "./FieldSelector";
import QueryBuilder from "./QueryBuilder";
import SavedQueries from "./SavedQueries";
import TimeControls from "./TimeControls";

export default function QuerySection({ onExportToGrafana }) {
    // variables for selected bucket and measurement
    const [selectedBucket, setSelectedBucket] = useState("");
    const [selectedMeasurement, setSelectedMeasurement] = useState("");
    const [selectedFields, setSelectedFields] = useState([]);

    // query builder states
    const [filters, setFilters] = useState([]); // [{fieldType, fieldName, operator, value, logicAfter}]
    const [groupBy, setGroupBy] = useState([]); // [{name, type}]
    const [aggregate, setAggregate] = useState("mean"); // mean,sum,min,max,count,last,first
    const [windowEvery, setWindowEvery] = useState("1m");
    const [createEmpty, setCreateEmpty] = useState(false);
    const [mathExpr, setMathExpr] = useState("");
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [refreshInterval, setRefreshInterval] = useState("30s");

    // time controls state
    const [timePreset, setTimePreset] = useState("Last 15m");
    const [timeFrom, setTimeFrom] = useState("");
    const [timeTo, setTimeTo] = useState("");
    const [timezone, setTimezone] = useState("local");

    // handler to add a field/tag if not already present
    const handleFieldDrop = (field) => {
        setSelectedFields(prev =>
            prev.some(f => f.name === field.name && f.type === field.type)
                ? prev
                : [...prev, field]
        );
    };

    // handler to remove a field/tag
    const handleFieldRemove = (field) => {
        setSelectedFields(prev =>
            prev.filter(f => !(f.name === field.name && f.type === field.type))
        );
    };

    // filters/group-by handlers
    const handleAddFilter = (field) => {
        setFilters(prev => [...prev, {
            fieldType: field.type,
            fieldName: field.name,
            operator: "=",
            value: "",
            logicAfter: prev.length > 0 ? "AND" : "" // show logic after all but first
        }]);
    };
    // patch is an object with keys to update
    const handleUpdateFilter = (index, patch) => {
        setFilters(prev => prev.map((f, i) => i === index ? { ...f, ...patch } : f));
    };
    // remove filter at index
    const handleRemoveFilter = (index) => {
        setFilters(prev => prev.filter((_, i) => i !== index));
    };
    // add group by if not already present
    const handleGroupDrop = (field) => {
        setGroupBy(prev =>
            prev.some(g => g.name === field.name && g.type === field.type) ? prev : [...prev, { name: field.name, type: field.type }]
        );
    };
    // remove group by at index
    const handleRemoveGroup = (index) => {
        setGroupBy(prev => prev.filter((_, i) => i !== index));
    };

    // build the current state for saving or running query
    const buildState = () => ({
        bucket: selectedBucket,
        measurement: selectedMeasurement,
        fields: selectedFields,
        filters,
        groupBy,
        aggregate,
        windowEvery,
        timePreset,
        timeFrom,
        timeTo,
    });

    // handler to run query and export to Grafana
    const handleRunQuery = async () => {
        const builderState = buildState();
        if (!builderState.bucket || !builderState.measurement) {
            alert("Select a bucket and measurement first.");
            return;
        }
        // save current state to localStorage
        localStorage.setItem("queryState", JSON.stringify(builderState));
        try {
            const res = await fetch("http://localhost:5001/api/grafana/dashboards/export", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${sessionStorage.getItem("accessToken") || ""}`,
                },
                body: JSON.stringify({ builderState }),
            });
            // expecting {url, uid, panelUrl, panelImageUrl} on success
            const data = await res.json();
            if (!res.ok) {
                alert(data.error || "Failed to create Grafana panel");
                return;
            }
            onExportToGrafana && onExportToGrafana({
                url: data.url,
                uid: data.uid,
                panelUrl: data.panelUrl,
                panelImageUrl: data.panelImageUrl,
            });
        } catch (e) {
            console.error(e);
            alert("Failed to contact Grafana. Check backend logs.");
        }
    };

    // render
    return (
        <div className="query-section">
            <div className="left-stack">
                <DataSource onBucketSelect={setSelectedBucket} onMeasurementSelect={setSelectedMeasurement} />
                <TimeControls
                    timePreset={timePreset} onChangeTimePreset={setTimePreset}
                    timeFrom={timeFrom} onChangeTimeFrom={setTimeFrom}
                    timeTo={timeTo} onChangeTimeTo={setTimeTo}
                    timezone={timezone} onChangeTimezone={setTimezone}
                />
            </div>

            <FieldSelector
                bucket={selectedBucket}
                measurement={selectedMeasurement}
                onFieldDragStart={field => window.draggedField = field}
            />

            <QueryBuilder
                selectedFields={selectedFields}
                onFieldDrop={handleFieldDrop}
                onFieldRemove={handleFieldRemove}
                filters={filters}
                onAddFilter={handleAddFilter}
                onUpdateFilter={handleUpdateFilter}
                onRemoveFilter={handleRemoveFilter}
                groupBy={groupBy}
                onGroupDrop={handleGroupDrop}
                onRemoveGroup={handleRemoveGroup}
                aggregate={aggregate}
                onChangeAggregate={setAggregate}
                windowEvery={windowEvery}
                onChangeWindowEvery={setWindowEvery}
                createEmpty={createEmpty}
                onChangeCreateEmpty={setCreateEmpty}
                mathExpr={mathExpr}
                onChangeMathExpr={setMathExpr}
                autoRefresh={autoRefresh}
                onChangeAutoRefresh={setAutoRefresh}
                refreshInterval={refreshInterval}
                onChangeRefreshInterval={setRefreshInterval}
                onRunQuery={handleRunQuery} // added
            />

            <SavedQueries />
        </div>
    );
}
