import DataSource from "./DataSource";
import FieldSelector from "./FieldSelector";
import QueryBuilder from "./QueryBuilder";
import SavedQueries from "./SavedQueries";

export default function QuerySection() {
    return (
        <div className="query-section">
            <DataSource />
            <FieldSelector />
            <QueryBuilder />
            <SavedQueries />
        </div>
    );
}
