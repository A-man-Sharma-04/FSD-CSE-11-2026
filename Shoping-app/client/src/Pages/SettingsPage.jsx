import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SettingsPage = ({ cartCount }) => {
  return (
    <div>
      <Header />
      <Navbar cartCount={cartCount} />
      <main className="info-page">
        <div className="page-card">
          <h2>⚙️ Account Settings</h2>
          <p className="page-desc">Manage preferences and app settings.</p>
          <div className="settings-options">
            <label className="setting-row">
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="setting-row">
              <span>Dark Theme (Upcoming feature)</span>
              <input type="checkbox" disabled />
            </label>
            <label className="setting-row">
              <span>Currency Display</span>
              <select defaultValue="INR">
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
              </select>
            </label>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
