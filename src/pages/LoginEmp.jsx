import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginEmp = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const onChange = (e) => [
    setCredentials({ ...credentials, [e.target.name]: e.target.value }),
  ];

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );

    const response = await fetch("http://localhost:5000/api/loginemployer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Check your credentials or Pls Register if not done yet...");
    }

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/createnewjob");
    }
  };

  return (
    <div className="flex justify-center mt-36 ">
      <div className="w-[400px] border p-8 rounded-xl shadow-md shadow-teal-200">
        <h1 className="text-3xl font-semibold text-teal-500 text-center">
          LoginEmp
        </h1>
        <form onSubmit={handleSubmit} method="POST">
          <Input
            onChange={onChange}
            value={credentials.email}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            variant="underlined"
            label="Email"
            placeholder="Enter your email"
          />

          <Input
            onChange={onChange}
            value={credentials.password}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            variant="underlined"
            label="Password"
            placeholder="********"
          />

          <Button
            type="submit"
            className="w-full border my-4 rounded-md p-2 bg-teal-200 hover:bg-teal-500 font-semibold border-teal-500"
          >
            LoginEmp
          </Button>
        </form>
        <div className="text-center">
          Dont have account{" "}
          <Link to="/createuser">
            {" "}
            <span className="hover:cursor-pointer hover:text-teal-500 p-1 text-teal-400 hover:underline">
              Register Now!
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginEmp;
