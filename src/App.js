import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Success from "./components/Success";
import Pay from "./components/Pay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="payment" element={<Pay />}/>
        <Route path="success" element={<Success />}/>
        </Routes>
    </Router>
  );
}

export default App;
