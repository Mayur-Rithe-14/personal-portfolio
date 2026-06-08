// client/src/components/Contact.jsx

require("dotenv").config("../.env");
import {useState} from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({name: "", email: "", message: ""});
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.message || "Failed to send message");
      }
    } catch (err) {
      setError("Error sending message. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>
          Get In Touch
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:mayurrithe2004@gmail.com">
                  mayurrithe2004@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Chh. Sambhaji Nagar, Maharashtra, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h4>Availability</h4>
                <p>
                  Available for internships and entry-level software developer
                  roles
                </p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
            </div>

            {success && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {error && <div className="error-message">✗ {error}</div>}

            <button
              type="submit"
              className="button-primary submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
