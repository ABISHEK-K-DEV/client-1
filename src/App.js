import React from "react";
import LogForm from "./components/LogForm";
import LogList from "./components/LogList";

const App = () => (
    <div className="bg-gray-100 min-h-screen py-8">
        <LogForm />
        <LogList />
    </div>
);

export default App;

