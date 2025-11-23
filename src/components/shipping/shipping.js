import "./shipping.css";

export const Shipping = () => {
  return (
    <div className="page shipping-page">
      <h1 className="shipping-title">Shipping & Delivery</h1>

      <div className="shipping-content">
        <p>
          Our store is based in <strong>New York, USA</strong>, and we proudly
          offer <strong>worldwide shipping</strong>. We work with the most
          trusted shipping providers to ensure your orders arrive safely and on
          time:
        </p>

        <ul className="shipping-brands">
          <li>
            UPS – reliable express and standard shipping across the globe.
          </li>
          <li>FedEx – fast international delivery with real-time tracking.</li>
          <li>DHL – trusted worldwide for rapid and secure delivery.</li>
          <li>USPS – domestic and international shipping options.</li>
        </ul>

        <p>
          <strong>Processing Time:</strong> Orders are processed within{" "}
          <strong>1–2 business days</strong> after purchase.
        </p>

        <p>
          <strong>Estimated Delivery:</strong> Depending on your location and
          shipping method, delivery may take <strong>3–10 business days</strong>{" "}
          domestically and <strong>7–21 business days</strong> internationally.
        </p>

        <p>
          <strong>Tracking:</strong> All shipments come with a tracking number,
          so you can follow your package every step of the way.
        </p>

        <p>
          <strong>Note:</strong> Customs duties, taxes, or additional fees may
          apply for international orders depending on your country’s
          regulations.
        </p>

        <p>
          We aim to make your shopping experience seamless and reliable, no
          matter where you are in the world.
        </p>
      </div>
    </div>
  );
};
