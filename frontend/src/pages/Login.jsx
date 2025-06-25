import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // prevent default form submission behavior
  };
  return (
    <form action="" className="min-h-[80vh] flex items-center">
      <div>
        <p>{state === "Sign Up" ? "Create Account " : "Login"}</p>
        <p>
          Please {state === "Sign Up" ? "sign up " : "log in"} to book
          appointment
        </p>
      </div>
    </form>
  );
};

export default Login;
