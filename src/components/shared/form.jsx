import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./form.module.css";
import { BtnSubmit } from "./buttons";
import { User, Mail, Phone, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_j3i9q4w",
        "template_1h6whga",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "ihhZcwCN1lresQ_hV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldTop}>
        <div className={styles.inputField}>
          <label className={styles.label}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className={styles.input}
            />
            <span className={styles.icon}>
              <User size={20} />
            </span>
          </label>
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className={styles.input}
            />
            <span className={styles.icon}>
              <Mail size={20} />
            </span>
          </label>
        </div>
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className={styles.input}
          />
          <span className={styles.icon}>
            <Phone size={20} />
          </span>
        </label>
      </div>

      <div className={styles.inputField}>
        <label className={styles.label}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Leave us a message"
            className={styles.textarea}
          />
          <span className={styles.icon}>
            <Send size={20} />
          </span>
        </label>
      </div>

      <BtnSubmit type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </BtnSubmit>

      <div className={styles.consentText}>
        <p>
          By clicking submit you agree to our{" "}
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
