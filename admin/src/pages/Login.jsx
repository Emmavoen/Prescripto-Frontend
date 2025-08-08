import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets";
import { AdminContext, DoctorContext } from "../context/ContextFile";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // console.log(backendUrl);

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          console.log(data);
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          console.log("testing toast");
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          console.log(data.token);
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          console.log("testing toast");
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center"
      action=""
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[var(--color-primary)]">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          className=" bg-[var(--color-primary)] text-white w-full py-2 rounded-md text-base"
          type="submit"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p className="text-sm text-[#5E5E5E]">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-[var(--color-primary)] cursor-pointer"
            >
              Login as Doctor
            </span>
          </p>
        ) : (
          <p className="text-sm text-[#5E5E5E]">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-[var(--color-primary)] cursor-pointer"
            >
              Login as Admin
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
