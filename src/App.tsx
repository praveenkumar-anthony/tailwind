import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const Intro = lazy(() => import("./components/Intro"));
const Eligibility = lazy(() => import("./components/Eligibility"));

function App() {
  return (
    <div className="p-8 container">
      <h1 className="mb-4 text-left text-4xl font-extrabold leading-none tracking-tight text-gray-900dark:text-white">Open account-based pension</h1>
      <p className="mb-6 text-left text-lg font-normal text-gray-500 dark:text-gray-400">Welcome to the start of journey Alex, you are about to open an account-based pension. Before you start, please consider the following:</p>
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/eligibility" element={<Eligibility />} />
        </Routes>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
