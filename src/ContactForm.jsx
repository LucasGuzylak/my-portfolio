import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jx5zhj2",
        "template_2h05j8e",
        form.current,
        "J6s7yBSaiJPAm7wvq"
      )
      .then(
        () => {
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("Message failed to send.");
          console.error(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="next-screen"
      style={{
        marginTop: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingBottom: 100,
        maxWidth: 400,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {/* Email input */}
      <div>
        <label
          className="input validator"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: "100%",
          }}
        >
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
      </div>

      {/* Message textarea */}
      <div style={{width: "100%"}}>
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="textarea"
          style={{ width: "100%", minHeight: "6rem" }}
        />
      </div>

      {/* Button centered below */}
      <div
        style={{
          paddingTop: 20,
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          type="submit"
          className="btn btn-soft btn-info"
          style={{ height: 40, width: 120 }}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
