import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Exchange from './pages/Exchange';
import UploadItem from './pages/exchange/UploadItem';
import AvailableItems from './pages/exchange/AvailableItems';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Challenges from './pages/Challenges';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import CustomerService from './pages/CustomerService';
import VirtualTryOn from './pages/VirtualTryOn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/exchange/upload" element={<UploadItem />} />
          <Route path="/exchange/available" element={<AvailableItems />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/virtual-try-on" element={<VirtualTryOn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;