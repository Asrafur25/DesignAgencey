import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebLayout from "./layouts/WebLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WebLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
