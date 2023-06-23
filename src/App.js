import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Detail from "./pages/Detail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={'/detail'} element={<Detail />} />

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
