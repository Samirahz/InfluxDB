import { useState } from "react";

const dummyFolders = [
    {
        name: "Folder 1",
        queries: ["Query 1", "Query 2", "Query 3"],
    },
    {
        name: "Folder 2",
        queries: ["Query 1", "Query 2"],
    },
    {
        name: "Recent Queries",
        queries: ["Query 1", "Query 2"],
    },
];

export default function SavedQueries() {
    const [openFolders, setOpenFolders] = useState({});

    const toggleFolder = (name) => {
        setOpenFolders((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="card saved-queries">
            <div className="card-title">Saved Queries</div>
            <div className="form-group">
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search saved queries..."
                />
            </div>

            <ul className="folder-list">
                {dummyFolders.map((folder, idx) => (
                    <li key={idx} className="folder-item">
                        <div
                            className="folder-name"
                            onClick={() => toggleFolder(folder.name)}
                        >
                            <span>{openFolders[folder.name] ? "📂" : "📁"} {folder.name}</span>
                            <div className="query-actions">
                                <button className="query-action-btn">Edit</button>
                                <button className="query-action-btn">Delete</button>
                            </div>
                        </div>

                        {openFolders[folder.name] && (
                            <ul className="sub-folder-list">
                                {folder.queries.map((q, i) => (
                                    <li key={i} className="sub-folder-item">
                                        <span>{q}</span>
                                        <div className="query-actions">
                                            <button className="query-action-btn">Load</button>
                                            <button className="query-action-btn">Edit</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
