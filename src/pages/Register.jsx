import { Input, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const Register = () => {
  const [regDone, setRegDone] = useState(false);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const regSet = () => {
    if (credentials.password.length > 0) {
      // Changed from credentials.password > 0 to credentials.password.length > 0
      setRegDone(true);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value }); // Changed from square brackets to parentheses
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      })
    );

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials!");
    }

    if (json.success) {
      navigate("/loginuser");
    }
  };

  // const gotcreateusered = () => {
  //   if (regDone === true) {
  //     alert("Registration Succesfull! Pls Login...");
  //   }
  // };

  return (
    <div className="flex justify-center mt-36 ">
      <div className="w-[500px] border p-8 rounded-xl shadow-md shadow-teal-200">
        <h1 className="text-3xl font-semibold text-teal-500 text-center">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={onChange}
            value={credentials.name}
            id="name"
            name="name"
            type="text" // Changed from type="name" to type="text"
            autoComplete="name"
            required
            variant="underlined"
            label="Name"
            placeholder="Enter your name"
          />

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
            Register
          </Button>
        </form>
        <div className="text-center">
          Already have account{" "}
          <Link to="/loginuser">
            {" "}
            <span className="hover:cursor-pointer hover:text-teal-500 p-1 text-teal-400 hover:underline">
              Login
            </span>
          </Link>
          <br />
          <Link to="/createemployer">
            {" "}
            <button className="hover:cursor-pointer hover:text-teal-500  hover:underline bg-yellow-100 p-2 rounded-xl mt-6">
              Register (as Employer)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

/*




          

*/
