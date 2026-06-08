// client/src/components/Footer.jsx
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p>© {currentYear} Mayur Rithe. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Privacy
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Terms
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
