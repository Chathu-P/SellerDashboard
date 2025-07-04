import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProfilePage from "./components/SellerDashboard/SellerProfile/ProfilePage"
import AddProductPage from "./components/SellerDashboard/AddProduct/AddProductPage"
import AnalyticsPage from "./components/SellerDashboard/Analytics/AnalyticsPage"
import WalletPage from "./components/SellerDashboard/Wallet/WalletPage"
import NotificationsPage from "./components/SellerDashboard/Notifications/NotificationsPage"
import "./index.css"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App