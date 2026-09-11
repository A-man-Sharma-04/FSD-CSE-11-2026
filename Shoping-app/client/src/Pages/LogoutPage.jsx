import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LogoutPage = ({ cartCount }) => {
  return (
    <div>
      <Header />
      <Navbar cartCount={cartCount} />
      <main className="info-page">
        <div className="page-card text-center">
          <h2>👋 Logged Out</h2>
          <p className="page-desc">You have been logged out of ShopZone Catalog.</p>
          <Link to="/" className="continue-shopping-btn inline-block mt-4">
            Log In / Return to Catalog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LogoutPage;
