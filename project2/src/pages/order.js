import React from 'react';
import '../styles/styles.css';
import Cards from '../components/cards';


const Order = () => {
  return (
    <div className="order-container">
    <h1>Book a Service</h1>
    <section className="order-info">
      <p>Thank you for choosing US for our services. Please review the available services below and select one to book.</p>
    </section>
    <Cards />

  </div>
  );
};

export default Order;
