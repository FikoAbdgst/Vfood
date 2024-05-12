import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Menu from "./features/menu/Menu";
import Shop from "./features/shop/Shop";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
