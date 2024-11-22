// import React, { useState } from "react";
// import axios from "axios";

// const LogForm = () => {
//   const [eventType, setEventType] = useState("");
//   const [timestamp, setTimestamp] = useState("");
//   const [sourceAppId, setSourceAppId] = useState("");
//   const [dataPayload, setDataPayload] = useState("{}");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const payload = {
//         eventType,
//         timestamp: new Date(timestamp).toISOString(),
//         sourceAppId,
//         dataPayload: JSON.parse(dataPayload),
//       };
//       await axios.post("http://localhost:5000/api/events", payload);
//       alert("Event logged successfully!");
//       setEventType("");
//       setTimestamp("");
//       setSourceAppId("");
//       setDataPayload("{}");
//     } catch (err) {
//       setError("Error adding log: " + (err.response?.data?.error || err.message));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Log Event</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Event Type:</label>
//           <input
//             type="text"
//             value={eventType}
//             onChange={(e) => setEventType(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Timestamp:</label>
//           <input
//             type="datetime-local"
//             value={timestamp}
//             onChange={(e) => setTimestamp(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Source App ID:</label>
//           <input
//             type="text"
//             value={sourceAppId}
//             onChange={(e) => setSourceAppId(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Data Payload (JSON):</label>
//           <textarea
//             value={dataPayload}
//             onChange={(e) => setDataPayload(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             rows="4"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
//             loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
//           }`}
//         >
//           {loading ? "Submitting..." : "Add Log"}
//         </button>
//       </form>
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default LogForm;


// import React, { useState } from "react";
// import axios from "axios";

// const LogForm = () => {
//   const [eventType, setEventType] = useState("");
//   const [timestamp, setTimestamp] = useState("");
//   const [sourceAppId, setSourceAppId] = useState("");
//   const [dataPayload, setDataPayload] = useState("{}");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const payload = {
//         eventType,
//         timestamp: new Date(timestamp).toISOString(),
//         sourceAppId,
//         dataPayload: JSON.parse(dataPayload),
//       };
//       await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/events`, payload);
//       alert("Event logged successfully!");
//       setEventType("");
//       setTimestamp("");
//       setSourceAppId("");
//       setDataPayload("{}");
//     } catch (err) {
//       setError("Error adding log: " + (err.response?.data?.error || err.message));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Log Event</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Event Type:</label>
//           <input
//             type="text"
//             value={eventType}
//             onChange={(e) => setEventType(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Timestamp:</label>
//           <input
//             type="datetime-local"
//             value={timestamp}
//             onChange={(e) => setTimestamp(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Source App ID:</label>
//           <input
//             type="text"
//             value={sourceAppId}
//             onChange={(e) => setSourceAppId(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-medium mb-2">Data Payload (JSON):</label>
//           <textarea
//             value={dataPayload}
//             onChange={(e) => setDataPayload(e.target.value)}
//             className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//             rows="4"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
//             loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
//           }`}
//         >
//           {loading ? "Submitting..." : "Add Log"}
//         </button>
//       </form>
//       {error && <p className="mt-4 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default LogForm;



import React, { useState } from "react";
import axios from "axios";

const LogForm = () => {
  const [eventType, setEventType] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [sourceAppId, setSourceAppId] = useState("");
  const [dataPayload, setDataPayload] = useState("{}");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        eventType,
        timestamp: new Date(timestamp).toISOString(),
        sourceAppId,
        dataPayload: JSON.parse(dataPayload),
      };
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/events`, payload);
      alert("Event logged successfully!");
      setEventType("");
      setTimestamp("");
      setSourceAppId("");
      setDataPayload("{}");
    } catch (err) {
      setError("Error adding log: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Log Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Event Type:</label>
          <input
            type="text"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Timestamp:</label>
          <input
            type="datetime-local"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Source App ID:</label>
          <input
            type="text"
            value={sourceAppId}
            onChange={(e) => setSourceAppId(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Data Payload (JSON):</label>
          <textarea
            value={dataPayload}
            onChange={(e) => setDataPayload(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold ${
            loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Submitting..." : "Add Log"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default LogForm;

