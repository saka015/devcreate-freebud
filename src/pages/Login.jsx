import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const validationErrors = {};

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.password || formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here (e.g., send login data to server)
      console.log("Login form submitted:", formData);
      // You can also redirect to another page here (e.g., dashboard)
    }
  };

  return (
    <div className="flex justify-center mt-36 ">
      <div className="w-[400px] border p-8 rounded-xl shadow-md shadow-teal-200">
        <h1 className="text-3xl font-semibold text-teal-500 text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            variant="underlined"
            label="Email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            type="password"
            variant="underlined"
            label="Password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <Button className="w-full border my-4 rounded-md p-2 bg-teal-200 hover:bg-teal-500 font-semibold border-teal-500">
            Login
          </Button>
        </form>
        <div className="text-center">
          Dont have account{" "}
          <Link to='/register'>
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

export default Login;
