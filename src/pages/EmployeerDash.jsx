import { Divider } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import { Input } from "@nextui-org/react";

const EmployeerDash = () => {
  return (
    <div className="rounded-xl  mt-20  border mx-96 justify-center p-8 box-content">
      <h1 className="text-2xl">Create new job</h1>
      <Divider className="my-4" />

      <form action="">
        <div className="gap-y-3 mt-6">
          <Input
            type="text"
            color="success"
            label="Job Title"
            className="max-w-full my-3"
          />
          <Textarea
            label="Job Description"
            className="max-w-full"
          />
          <div className="flex gap-x-3">
            <Input
              type="text"
              color="secondary"
              label="Skill 1"
              className="max-w-full my-3"
            />
            <Input
              type="text"
              color="secondary"
              label="Skill 2"
              className="max-w-full my-3"
            />
            <Input
              type="text"
              color="secondary"
              label="Skill 3"
              className="max-w-full my-3"
            />
          </div>
          <Input
            type="text"
            color="primary"
            label="Price"
            className="max-w-full my-3"
          />
        </div>
        <button className="bg-green-300 hover:bg-green-200 text-semibold mt-2 tracking-wider rounded-xl p-3 px-10 ">
          Save
        </button>
      </form>
    </div>
  );
};

export default EmployeerDash;
