import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import User from "./components/User";
import Dasboard from "./components/dashboard/Dasboard";
import Inventory from "./components/Inventory";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import Sign from "./components/signinpage/Sign";
import CustomerOrder from "./components/customerOrderPage/CustomerOrder";

function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route index element={<Sign />} />
            <Route path="/dashboard" element={<Dasboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/inventory" element={<CustomerOrder />} />
            <Route path="/orderform" element={<OrderForm />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}

export default App;
