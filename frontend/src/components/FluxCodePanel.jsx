export default function FluxCodePanel({ showFlux, setShowFlux }) {
    return (
        <div>
        {/* Toggle & Status */}
        <div className="flux-toggle-container">
            <div className="status-indicator">
            <div className="status-dot"></div>
            <span>Connected to InfluxDB</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "14px" }}>Show Flux Code</span>
            <label className="toggle-switch">
                <input
                type="checkbox"
                checked={showFlux}
                onChange={(e) => setShowFlux(e.target.checked)}
                />
                <span className="toggle-slider"></span>
            </label>
            <span style={{ fontSize: "12px" }}>Query executed in 127ms</span>
            </div>
        </div>

        {/* Flux Code Panel */}
        {showFlux && (
            <div className="code-panel">
            <div className="code">
                <span className="syntax-keyword">from</span>(
                <span className="syntax-string">bucket:</span>{" "}
                <span className="syntax-string">"sensor-data"</span>) <br />
                |&gt; <span className="syntax-function">range</span>(
                <span className="syntax-string">start:</span> -1h) <br />
                |&gt; <span className="syntax-function">filter</span>(
                <span className="syntax-string">fn:</span> (r) =&gt;
                r._measurement =={" "}
                <span className="syntax-string">"temperature"</span>) <br />
                |&gt; <span className="syntax-function">filter</span>(
                <span className="syntax-string">fn:</span> (r) =&gt; r._field =={" "}
                <span className="syntax-string">"value"</span>) <br />
                |&gt; <span className="syntax-function">aggregateWindow</span>(
                <span className="syntax-string">every:</span> 5m,{" "}
                <span className="syntax-string">fn:</span> mean)
            </div>
            </div>
        )}
        </div>
    );
}

