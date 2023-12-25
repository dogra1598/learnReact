import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

const App = () => {
    return (
        <div className="bg-slate-800">
            <Header />
            {/* Body */}
            {/* Footer */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
