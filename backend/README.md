# InfluxDB No-Code Backend API

This is the backend server for the 2025 Industrial Project — a no-code interface for querying and visualizing InfluxDB data. It provides a REST API to interact with InfluxDB 2.7 and integrates with Grafana for enhanced visualization.

## Prerequisites

-   Node.js installed
-   InfluxDB 2.7 installed and running locally
-   An InfluxDB organization and token created
-   Grafana for visualization integration

## Setup Instructions

1.  **Clone the repository**

    Navigate to the backend directory.

2.  **Install dependencies**

    ### `npm install`

3.  **Create a `.env` file**

    In the root of the `backend` folder, create a file named `.env` and add the following:

    INFLUX_URL=http://localhost:8086 INFLUX_TOKEN=your_token_here 
    INFLUX_ORG=your_org_name

    Replace `your_token_here` and `your_org_name` with your actual InfluxDB token and organization name

4.  **Start the server**

    ### `npm run dev`

## Available API Endpoints

-   `GET /api/influx/buckets` — Fetches all available InfluxDB buckets.
-   `GET /api/influx/test` — Returns a test response to confirm server is running.