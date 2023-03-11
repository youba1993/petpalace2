import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useSelector } from 'react-redux'

import CheckoutForm from "../components/CheckoutForm"; 

const stripePromise = loadStripe("pk_test_51MiXLdCETjFQW3n5TjwWfcv8DtnjFMbJDcEThggjcRD2lRz8zo04V5gmNbGv6RQdPXGxMSUyLeJoYzvtrV60PfwJ00d9vkyTHa");

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");
  const total = useSelector((state) => state.cart.total)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ charge: { amount: total }, stripeToken: stripePromise }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));
  }, []);
  
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div >
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}