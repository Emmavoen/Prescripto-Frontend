import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Paystack = () => {
  const { backendUrl, token } = useContext(AppContext);
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const appointmentId = urlParams.get("appointmentId");
  const reference = urlParams.get("reference");

  const verifyPayment = async () => {
    try {
      console.log("verifying payment");
      const { data } = await axios.post(
        backendUrl + "api/user/verify-paystack-payment",
        { appointmentId, reference },
        {
          headers: { token },
        }
      );
      if (data.success) {
        console.log(data.message);
        toast.success(data.message, {
          onClose: () => (window.location.href = "/my-appointments"),
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    verifyPayment();
  }, [reference]);
  return (
    <div>
      <p>Verifying payment...</p>
    </div>
  );
};

export default Paystack;
