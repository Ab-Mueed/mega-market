import './PaymentFooter.css';

function PaymentFooter() {
  const paymentMethods = [
    { name: 'Apple Pay', image: '/src/assets/images/apple-pay.svg' },
    { name: 'Google Pay', image: '/src/assets/images/g-pay.svg' },
    { name: 'Stripe', image: '/src/assets/images/stripe.svg' },
    { name: 'PayPal', image: '/src/assets/images/pay-pal.svg' }
  ];

  const topRowMethods = paymentMethods.slice(0, 3);
  const bottomRowMethod = paymentMethods[3];

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
            />
          ))}
        </div>

        <div className="payment-row payment-row-bottom">
          <img
            src={bottomRowMethod.image}
            alt={bottomRowMethod.name}
            className="payment-logo payment-logo-large"
          />
        </div>
      </div>
    </footer>
  );
}

export default PaymentFooter;
