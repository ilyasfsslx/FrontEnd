import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import Checkout from "./components/Cart/Checkout";
import Product1 from "./components/Product/Product1"; // ⬅️ Import Product1

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/1" element={<Product1 />} /> {/* ⬅️ Tambahkan ini */}
        </Route>

        <Route>{/* admin layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
