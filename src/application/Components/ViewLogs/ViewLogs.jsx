import React, { useEffect, useState } from "react";
import { logInstance } from "../../../AxiosConfig";

// Utility to strip ANSI escape codes
const stripAnsi = (str) => {
  return str.replace(/\x1B\[[0-9;]*m/g, "");
};

export const ViewLogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState([]); // Logs array
  const [error, setError] = useState(null);

  const fetchLogs = async () => {
    try {
      setIsLoading(true);
      const response = await logInstance.get("/logs");
      const data = await response.data;
      const cleanedLogs = data.logs.map((log) => stripAnsi(log));
      setLogs(cleanedLogs);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching logs:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="view-logs-container">
      <h1>Server Logs</h1>
      {isLoading && <p className="loading">Loading logs...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      <div className="logs-wrapper">
        {logs
          .slice() // Create a shallow copy of the logs array to avoid mutating state
          .reverse() // Reverse the array to show latest logs on top
          .map((log, index) => (
            <div
              key={index}
              className={`log-entry ${log.includes("error") ? "error-log" : "info-log"}`}
            >
              {log}
            </div>
          ))}
      </div>
    </div>
  );
};
