import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Partner from './pages/Partner'
import PartnerDashboard from './pages/partner/Dashboard'
import PartnerInbox from './pages/partner/Inbox'
import PartnerOrders from './pages/partner/Orders'
import PartnerMenus from './pages/partner/Menus'
import PartnerReviews from './pages/partner/Reviews'
import PartnerAnalytics from './pages/partner/Analytics'
import PartnerSettings from './pages/partner/Settings'
import Customer from './pages/Customer'
import CustomerHome from './pages/customer/Home'
import CustomerAddress from './pages/customer/Address'
import CustomerFavorites from './pages/customer/Favorites'
import CustomerOrders from './pages/customer/Orders'
import CustomerReviews from './pages/customer/Reviews'
import CustomerSettings from './pages/customer/Settings'
import CategoryDetail from "./pages/CategoryDetail"
import NotFound from './pages/NotFound'
import StoreFront from './pages/StoreFront'
import PartnerLogin from './pages/partner/Login'
import PartnerRegister from './pages/partner/Register'
import RestaurantList from './pages/RestaurantList'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='partner/login' element={<PartnerLogin />} />
        <Route path='partner/register' element={<PartnerRegister />} />
        <Route path='partner' element={<Partner />}>
          <Route index element={<PartnerDashboard />} />
          <Route path='inbox' element={<PartnerInbox />} />
          <Route path='orders' element={<PartnerOrders />} />
          <Route path='menus' element={<PartnerMenus />} />
          <Route path='reviews' element={<PartnerReviews />} />
          <Route path='analytics' element={<PartnerAnalytics />} />
          <Route path='settings' element={<PartnerSettings />} />
        </Route>
        <Route path='customer' element={<Customer />}>
          <Route index element={<CustomerHome />} />
          <Route path='address' element={<CustomerAddress />} />
          <Route path='favorites' element={<CustomerFavorites />} />
          <Route path='orders' element={<CustomerOrders />} />
          <Route path='reviews' element={<CustomerReviews />} />
          <Route path='settings' element={<CustomerSettings />} />
        </Route>
        <Route path='/:id' element={<CategoryDetail />} />
        <Route path='/restaurants-near-me' element={<RestaurantList />} />
        <Route path='/store/:id' element={<StoreFront />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
