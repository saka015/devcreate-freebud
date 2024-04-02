import { Divider } from "@nextui-org/react";
import { useState } from "react";

import { Textarea } from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

import { Input } from "@nextui-org/react";

const EmployerDash = () => {
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
    price: "",
  });

  const onChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value }); // Changed from square brackets to parentheses
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    console.log(
      JSON.stringify({
        title: jobDetails.title,
        description: jobDetails.description,
        skill1: jobDetails.skill1,
        skill2: jobDetails.skill2,
        skill3: jobDetails.skill3,
        price: jobDetails.price,
      })
    );

    const response = await fetch("http://localhost:5000/api/createnewjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: jobDetails.title,
        description: jobDetails.description,
        skill1: jobDetails.skill1,
        skill2: jobDetails.skill2,
        skill3: jobDetails.skill3,
        price: jobDetails.price,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials!");
    }

    if (json.success) {
      // navigate("/createnewjob");
      console.log("done");
    }
  };

  return (
    <div className="rounded-xl  mt-20  border mx-96 justify-center p-8 box-content">
      <h1 className="text-2xl">Create new job</h1>
      <Divider className="my-4" />

      <form onSubmit={handleSubmit}>
        <div className="gap-y-3 mt-6">
          <Input
            onChange={onChange}
            value={jobDetails.title}
            type="text"
            color="success"
            name="title"
            label="Job Title"
            className="max-w-full my-3"
          />
          <Textarea
            onChange={onChange}
            value={jobDetails.description}
            label="Job Description"
            name="description"
            className="max-w-full"
          />
          <div className="flex gap-x-3">
            <Input
              onChange={onChange}
              value={jobDetails.skill1}
              type="text"
              color="secondary"
              label="Skill 1"
              name="skill1"
              className="max-w-full my-3"
            />
            <Input
              onChange={onChange}
              value={jobDetails.skill2}
              type="text"
              color="secondary"
              label="Skill 2"
              name="skill2"
              className="max-w-full my-3"
            />
            <Input
              onChange={onChange}
              value={jobDetails.skill3}
              type="text"
              color="secondary"
              label="Skill 3"
              name="skill3"
              className="max-w-full my-3"
            />
          </div>
          <Input
            onChange={onChange}
            value={jobDetails.price}
            type="text"
            color="primary"
            label="Price"
            name="price"
            className="max-w-full my-3"
          />
        </div>
        <button
          type="submit"
          className="bg-green-300 hover:bg-green-200 text-semibold mt-2 tracking-wider rounded-xl p-3 px-10 "
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EmployerDash;
