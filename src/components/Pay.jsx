import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import Axios from "axios";

const PUBLISHABLE_STRIPE_KEY =
  "pk_test_51LoOCXH3gnYsSJ6YKQrvbw2i2Q8tyvjDvawgxhgZx7q8QniqCsq7VYrbmaTkoyrWsF8lEsEN9OkhGs7LoUQfIW4300xq9VzcMS";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await Axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, [stripeToken]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* {stripeToken} */}
        <StripeCheckout
          name="Linda shopping platform"
          image="https://www.facebook.com/photo.php?fbid=1722473474804250&set=a.270455080006104&type=3"
          currency="NGN"
          shippingAddress={false}
          billingAddress={false}
          description="Your Total Is 20000 "
          amount={2000}
          token={onToken}
          stripeKey={PUBLISHABLE_STRIPE_KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      </div>
    </>
  );
};

export default Pay;
