// imports
import { useState } from "react";
import DataSource from "./DataSource";
import FieldSelector from "./FieldSelector";
import QueryBuilder from "./QueryBuilder";
import SavedQueries from "./SavedQueries";

export default function QuerySection() {
    // variables for selected bucket and measurement
    const [selectedBucket, setSelectedBucket] = useState("");
    const [selectedMeasurement, setSelectedMeasurement] = useState("");
    const [selectedFields, setSelectedFields] = useState([]); // <-- add this

    // Handler to add a field/tag if not already present
    const handleFieldDrop = (field) => {
        setSelectedFields(prev =>
            prev.some(f => f.name === field.name && f.type === field.type)
                ? prev
                : [...prev, field]
        );
    };

    // Handler to remove a field/tag
    const handleFieldRemove = (field) => {
        setSelectedFields(prev =>
            prev.filter(f => !(f.name === field.name && f.type === field.type))
        );
    };

    return (
        // main return with all components
        <div className="query-section">
            <DataSource
                onBucketSelect={setSelectedBucket}
                onMeasurementSelect={setSelectedMeasurement}
            />
            <FieldSelector
                bucket={selectedBucket}
                measurement={selectedMeasurement}
                onFieldDragStart={field => window.draggedField = field}
            />
            <QueryBuilder
                selectedFields={selectedFields}
                onFieldDrop={handleFieldDrop}
                onFieldRemove={handleFieldRemove}
            />
            <SavedQueries />
        </div>
    );
}
