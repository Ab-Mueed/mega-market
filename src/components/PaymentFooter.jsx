import { PAYMENT_METHODS } from '../data/constants';
import '../styles//PaymentFooter.css';

function PaymentFooter() {
  const topRowMethods = PAYMENT_METHODS.slice(0, 3);
  const bottomRowMethod = PAYMENT_METHODS[3];

  return (
    <footer className="payment-footer">
      <div className="payment-methods">
        <h2 className="payment-title">
          Instant and secure<br />checkout with
        </h2>

        <div className="payment-row payment-row-top">
          {topRowMethods.map((method, index) => (
            <img
              key={index}
              src={method.image}
              alt={method.name}
              className="payment-logo"
              loading="lazy"
            />
          ))}
        </div>

        <div className="payment-row payment-row-bottom">
          <img
            src={bottomRowMethod.image}
            alt={bottomRowMethod.name}
            className="payment-logo payment-logo-large"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}

export default PaymentFooter;
