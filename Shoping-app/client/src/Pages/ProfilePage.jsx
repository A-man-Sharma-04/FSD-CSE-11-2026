import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProfilePage = ({ cartCount }) => {
  return (
    <div>
      <Header />
      <Navbar cartCount={cartCount} />
      <main className="info-page">
        <div className="page-card">
          <div className="profile-header">
            <div className="profile-avatar">👨‍🎓</div>
            <div>
              <h2>FSD Student</h2>
              <p className="profile-email">student@college.edu</p>
              <span className="profile-role">CSE-11 Batch</span>
            </div>
          </div>
          <div className="profile-details">
            <div className="detail-row">
              <strong>Course:</strong> Full Stack Web Development (React)
            </div>
            <div className="detail-row">
              <strong>Project:</strong> Basic React Shopping Catalog App
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
