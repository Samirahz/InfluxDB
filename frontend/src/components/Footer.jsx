export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-logo">InfluxDB No-Code Interface</h3>
          <p className="footer-text">Manage your data with ease.</p>
        </div>
        <div className="footer-links">
          <a href="#">Docs</a>
          <a href="https://github.cs.adelaide.edu.au/a1881053/INFLUX-UI-UG-1">GitHub</a>
          <a href="#">Support</a>
          <a href="#">Privacy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} InfluxDB No-Code Interface. All rights reserved.</span>
      </div>
    </footer>
  );
}
