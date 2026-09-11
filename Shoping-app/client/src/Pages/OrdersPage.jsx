import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrdersPage = ({ cartCount }) => {
  const sampleOrders = [
    {
      id: "ORD-98214",
      date: "10 Sep 2026",
      status: "Delivered",
      total: 2499,
      items: ["Wireless Over-Ear Headphones"]
    },
    {
      id: "ORD-87123",
      date: "02 Sep 2026",
      status: "Delivered",
      total: 499,
      items: ["React.js Complete Guide"]
    }
  ];

  return (
    <div>
      <Header />
      <Navbar cartCount={cartCount} />
      <main className="info-page">
        <div className="page-card">
          <h2>📦 Order History</h2>
          <p className="page-desc">View your previous purchases and order tracking status.</p>

          <div className="orders-list">
            {sampleOrders.map((ord) => (
              <div key={ord.id} className="order-item">
                <div className="order-meta">
                  <span className="order-id">{ord.id}</span>
                  <span className="order-date">{ord.date}</span>
                  <span className="order-status badge-success">{ord.status}</span>
                </div>
                <div className="order-details">
                  <p><strong>Items:</strong> {ord.items.join(', ')}</p>
                  <p><strong>Total Paid:</strong> ₹{ord.total.toLocaleString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;
