import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="page contacts-page">
      <h1 className="contacts-title">Contact & Location</h1>

      <p className="contacts-sub">
        We are always ready to help with your orders, shipping and returns.
      </p>

      <div className="contacts-grid">
        <div className="contacts-info">
          <h2>Store Address</h2>
          <p>Times Square, New York, USA</p>

          <h2>Customer Support</h2>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 (212) 555-0192</p>

          <h2>Business Hours</h2>
          <p>Mon – Fri: 10:00 – 20:00</p>
          <p>Weekend: 12:00 – 18:00</p>
        </div>

        <iframe
          className="contacts-map"
          src="https://maps.google.com/maps?q=times%20square%20new%20york&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        />
      </div>
    </div>
  );
};
