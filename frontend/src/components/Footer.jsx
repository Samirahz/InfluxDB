export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">MyDashboard</h3>
        <p className="footer-text">
          Manage your data with ease.
        </p>

        <div className="footer-links">
          <a href="#">Docs</a>
          <a href="#">GitHub</a>
          <a href="#">Support</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MyDashboard. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
