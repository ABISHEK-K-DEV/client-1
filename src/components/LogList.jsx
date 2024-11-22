import React, { useState, useEffect } from "react";
import axios from "axios";

const LogList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    try {
      const apiBaseUrl = "https://sever-gc0a.onrender.com"; 
      const response = await axios.get(`${apiBaseUrl}/api/events`);
      setLogs(response.data.events);
    } catch (err) {
      console.error("Error fetching logs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Event Logs</h2>
      {loading ? (
        <p className="text-gray-500">Loading logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-gray-500">No logs available.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {logs.map((log, index) => (
            <li key={index} className="py-4">
              <p>
                <strong className="text-blue-600">{log.eventType}</strong>
                <span className="text-gray-600"> - {new Date(log.timestamp).toLocaleString()}</span>
              </p>
              <p className="text-gray-500">Source App ID: {log.sourceAppId}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LogList;

