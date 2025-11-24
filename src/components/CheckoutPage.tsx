"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    // THIS MUST ALWAYS COME FIRST
    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message || "Payment details incomplete.");
      setLoading(false);
      return;
    }

    // Confirm payment
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setErrorMessage(error.message || "Payment failed.");
    }

    setLoading(false);
  };

  if (!clientSecret)
    return <div className="text-white">Loading payment...</div>;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-3 rounded-md">
      <PaymentElement />

      {errorMessage && (
        <p className="text-red-500 mt-2 font-semibold">{errorMessage}</p>
      )}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-4 bg-black mt-3 rounded-md font-bold disabled:opacity-50"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default CheckoutPage;
