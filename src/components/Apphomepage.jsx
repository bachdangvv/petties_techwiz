import { useEffect } from "react";
import React, { useState } from "react";
import cx from 'classnames';
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

function Apphomepage() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    // 1) ABOUT CAROUSEL
    const el = document.querySelector(".about-media.swiper");
    if (el && typeof Swiper !== "undefined") {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const swiper = new Swiper(el, {
        loop: true,
        speed: 600,
        autoplay: reduceMotion
          ? false
          : {
              delay: 3000,
              disableOnInteraction: false,
            },
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
        },
        touchReleaseOnEdges: true,
        grabCursor: true,
      });

      el.addEventListener("mouseenter", () => {
        if (swiper.autoplay) swiper.autoplay.stop();
      });
      el.addEventListener("mouseleave", () => {
        if (swiper.autoplay) swiper.autoplay.start();
      });
    }

    // 2) HEADER EFFECT ON SCROLL
    const header = document.querySelector("header");
    const onScroll = () => {
      const scrolled = window.scrollY > 10;
      header?.classList.toggle("scrolled", scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3) SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        const target = id && id.length > 1 ? document.querySelector(id) : null;
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // 4) ADD TO CART TOAST
    const buttons = document.querySelectorAll(".card .btn.btn-primary");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const name = card ? card.querySelector("h3, .h6")?.textContent?.trim() : "Sản phẩm";
        showToast(`Đã thêm “${name || "sản phẩm"}” vào giỏ hàng`);
      });
    });

    function showToast(message) {
      let holder = document.querySelector("#toast-holder");
      if (!holder) {
        holder = document.createElement("div");
        holder.id = "toast-holder";
        Object.assign(holder.style, {
          position: "fixed",
          right: "16px",
          bottom: "16px",
          zIndex: "9999",
        });
        document.body.appendChild(holder);
      }
      const t = document.createElement("div");
      t.textContent = message;
      Object.assign(t.style, {
        background: "#4B2E23",
        color: "#fff",
        padding: "10px 14px",
        marginTop: "10px",
        borderRadius: "10px",
        boxShadow: "0 10px 24px rgba(0,0,0,.25)",
        fontWeight: "600",
        maxWidth: "320px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        transform: "translateY(10px)",
        opacity: "0",
        transition: "transform .2s ease, opacity .2s ease",
      });
      holder.appendChild(t);
      requestAnimationFrame(() => {
        t.style.opacity = "1";
        t.style.transform = "translateY(0)";
      });
      setTimeout(() => {
        t.style.opacity = "0";
        t.style.transform = "translateY(10px)";
        setTimeout(() => t.remove(), 200);
      }, 2200);
    }

    // 5) LAZY ENHANCE
    const imgs = document.querySelectorAll("img");
    if ("IntersectionObserver" in window && imgs.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("loaded");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "100px" }
      );

      imgs.forEach((img) => io.observe(img));
    }
  }, []);

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
    <>
    <div className="hero1-section">
        <img src="/images/shape/meow-shape.png" alt="cat" className="shape shape-cat" />
  <img src="/images/shape/ball-shape.png" alt="yarn" className="shape shape-yarn" />
        <div className="hero1-row">
      <div className="hero1-content">
        <h1 className="hero1-title" data-aos="fade-right">Trusted Pet Center</h1>
        <h2 className="hero1-subtitle" data-aos="fade-right">For Caring & Veterinary Service</h2>
        <p className="hero1-description" data-aos="fade-right">
          Dedicated to providing compassionate care and trusted veterinary services to ensure the health and happiness of your beloved pets.
        </p>
        <button className="hero1-read-more-button">
          Read More →
        </button>
        </div>
      </div>
      <div className="hero1-row">
        <img className="hero1-right-img" src="/images/hero-1.png" />
      </div>
    </div>
    <div className="hero2-row">
            <h2 className="hero2-title" data-aos="fade-up">WE CHANGE YOUR LIFE & WORLD</h2>
            <p className="hero2-des" data-aos="fade-up">Meet Our Expertise Pet Doctors</p>
        </div>
    <div className="hero2-section">
        
        <div className="hero2-col">
      <div className="hero2-content">
        <div className="hero2-img-wrapper">
            <img src="/images/shape/foot-shape.png" alt="foot" className="shape-foot" />
        <div className="hero2-img">
            
        <img style={{
                        WebkitMaskImage: "url(/images/shape/team_mask_img.svg)",
                        maskImage: "url(/images/shape/team_mask_img.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover"
                      }} src="/images/vet-doc-1.jpg" data-aos="fade-up"/>
                      </div>
                      </div>
        <p className="hero2-team">
          Daria Andaloro
        </p>
        <p className="hero2-name">
          Veterinary Technician
        </p>
        </div>
      </div>
      <div className="hero2-col">
      <div className="hero2-content">
        <div className="hero2-img-wrapper">
            <img src="/images/shape/foot-shape.png" alt="foot" className="shape-foot" />
        <div className="hero2-img">
        <img style={{
                        WebkitMaskImage: "url(/images/shape/team_mask_img.svg)",
                        maskImage: "url(/images/shape/team_mask_img.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover"
                      }} src="/images/vet-doc-2.jpg"  data-aos="fade-up"/>
                      </div>
                      </div>
        <p className="hero2-team">
          Michael Brian
        </p>
        <p className="hero2-name">
          Medicine Specialist
        </p>
        </div>
      </div>
      <div className="hero2-col">
      <div className="hero2-content">
        <div className="hero2-img-wrapper">
            <img src="/images/shape/foot-shape.png" alt="foot" className="shape-foot" />
        <div className="hero2-img">
        <img style={{
                        WebkitMaskImage: "url(/images/shape/team_mask_img.svg)",
                        maskImage: "url(/images/shape/team_mask_img.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover"
                      }} src="/images/vet-doc-3.jpg"  data-aos="fade-up"/>
                      </div>
                      </div>
        <p className="hero2-team">
          Kenroly Gajon
        </p>
        <p className="hero2-name">
          Food Technician
        </p>
        
      </div>
      </div>
      <div className="hero2-col">
      <div className="hero2-content">
        <div className="hero2-img-wrapper">
            <img src="/images/shape/foot-shape.png" alt="foot" className="shape-foot" />
        <div className="hero2-img">
        <img style={{
                        WebkitMaskImage: "url(/images/shape/team_mask_img.svg)",
                        maskImage: "url(/images/shape/team_mask_img.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "cover",
                        maskSize: "cover"
                      }} src="/images/vet-doc-4.jpg"  data-aos="fade-up"/>
                      </div>
                      </div>
        <p className="hero2-team">
          Lizay Arianya
        </p>
        <p className="hero2-name">
          Veterinary Technician
        </p>
        </div>
      </div>
    </div>
    <div class="marquee__area">
            <div class="marquee__wrap">
                <div class="marquee__box">
                	                    <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                    </div>
                <div class="marquee__box">
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                        <span>Book For Online Appointment <img decoding="async" src="/images/shape/marquee_icon.svg" alt="" /></span>
                                    </div>
            </div>
        </div>
    <div className="hero3-section">
        <img src="/images/shape/hand_shape03.png" alt="hand" className="shape-hand" />
        <div class="contact-booking">
  <h2 class="contact-booking-title"  data-aos="fade-right">Schedule A Visit Today!</h2>
  <form onSubmit={handleSubmit} class="booking-form">
    <div class="form-row">
      <div class="form-group">
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

      <div class="form-group">
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

      <div class="form-group">
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

    <div class="form-row">
      <div class="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div class="form-group">
        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <div class="form-group">
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
    <div className="contact-btn">
    <button type="submit" class="submit-btn"  data-aos="fade-left">
      Start A Reservation →
    </button>
    </div>
  </form>
</div>
    </div>
    </>
  );
}

export default Apphomepage;