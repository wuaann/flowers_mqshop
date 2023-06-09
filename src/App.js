import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./pages/Layout";

import Footer from "./components/Footer";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>

              <Route index element={<Footer />}

              />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
