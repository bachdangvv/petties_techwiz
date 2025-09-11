import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const faPhonefont = <FontAwesomeIcon icon={faPhone} />
    const falocationdotfont = <FontAwesomeIcon icon={faLocationDot} />
     const faEnvelopefont = <FontAwesomeIcon icon={faEnvelope} />
     const faShareNodesfont = <FontAwesomeIcon icon={faShareNodes} />
  const [formData, setFormData] = useState({
    name: "",
    petType: "",
    service: "",
    date: "",
    time: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Info:", formData);
    alert("✅ Reservation submitted successfully!");
  };

  return (
    <div className="contact-wrapper">
      {/* Header */}
      <div className="contact-header">
        <h2 className="contact-page-title">Booking Appointment</h2>
      </div>

      {/* Main Content */}
      <div className="contact-container">
        {/* <div className="meow-shape">
          <img src="/images/shape/meow.png" alt="meow shape" />
        </div> */}
        {/* Left Info */}
        <div className="contact-left">
          <h2 className="contact-left-title">We Are Always Available For You &amp; Your Pets</h2>
          <ul className="contact-info">
            <li><FontAwesomeIcon icon={faPhone} /> +123 8989 444</li>
            <li><FontAwesomeIcon icon={faLocationDot} /> 256 Avenue, New York City</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> info@gmail.com</li>
            <li><FontAwesomeIcon icon={faShareNodes} /> Facebook</li>
          </ul>
        </div>

        {/* Right Booking Form */}
        <div className="contact-booking">
          <h2 className="contact-booking-title">Schedule A Visit Today!</h2>
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Pet Type</label>
                <select
                  name="petType"
                  value={formData.petType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Pet Type</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                </select>
              </div>

              <div className="form-group">
                <label>Interest In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Grooming">Grooming</option>
                  <option value="Boarding">Boarding</option>
                  <option value="Veterinary">Veterinary</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+123 888 ...."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Start A Reservation →
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </div>
  );
}

export default Contact;
