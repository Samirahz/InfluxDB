import { useState } from "react";

export default function DataSource() {
    const [bucket, setBucket] = useState("");
    const [measurement, setMeasurement] = useState("");
    const [timeRange, setTimeRange] = useState("");
    const [interval, setInterval] = useState("");

    return (
        <div className="card">
            <div className="card-title">Data Source</div>

            {/* BUCKET */}
            <div className="form-group">
                <div className="form-label">Bucket</div>
                <select className="form-control" value={bucket} onChange={(e) => setBucket(e.target.value)}>
                    <option value="" disabled>Select bucket</option>
                    <option value="bucket1">Bucket 1</option>
                    <option value="bucket2">Bucket 2</option>
                    <option value="bucket3">Bucket 3</option>
                </select>
            </div>

            {/* MEASUREMENT */}
            <div className="form-group">
                <div className="form-label">Measurement</div>
                <select className="form-control" value={measurement} onChange={(e) => setMeasurement(e.target.value)}>
                    <option value="" disabled>Select measurement</option>
                    <option value="measurement1">Measurement 1</option>
                    <option value="measurement2">Measurement 2</option>
                    <option value="measurement3">Measurement 3</option>
                </select>
            </div>

            {/* TIME RANGE & INTERVAL */}
            <div className="form-group">
                <label className="form-label">Time Range</label>
                <div className="time-picker">
                    <select className="form-control" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                        <option value="" disabled>Select time range</option>
                        <option value="1h">Last 1 hour</option>
                        <option value="24h">Last 24 hours</option>
                        <option value="7d">Last 7 days</option>
                        <option value="custom">Custom range</option>
                    </select>
                    <select className="form-control" value={interval} onChange={(e) => setInterval(e.target.value)}>
                        <option value="" disabled>Select interval</option>
                        <option value="5m">5m intervals</option>
                        <option value="5m">15m intervals</option>
                        <option value="5m">1h intervals</option>
                    </select>
                </div>
            </div>
        </div>
    );
}