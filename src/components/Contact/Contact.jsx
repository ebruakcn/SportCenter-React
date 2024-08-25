import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="section-title">CONTACT US</h2>
        <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <label>Mobile Number</label>
              <label>Email Address</label>
            </div>
            <div className="contact-item">
              <span>+135 773 322 4442</span>
              <span>demo@demo.com</span>
            </div>

            <form>
              <h2>Make An Appointment</h2>

              <input
                type="text"
                className="custom-form"
                id="first_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                className="custom-form"
                id="email"
                placeholder="Your Email"
                required
              />

              <textarea
                className="custom-form"
                id="message"
                name="message"
                rows="5"
                cols="20"
                placeholder="Your Message"
                required
              ></textarea>
            </form>
          </div>

          <div className="map">
            <iframe
              className="custom-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.27444309705!2d-70.56107012328617!3d41.45496257129134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1722337147868!5m2!1str!2str"
              width="400"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
