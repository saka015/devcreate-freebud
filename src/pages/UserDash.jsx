import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Image,
  Input,
} from "@nextui-org/react";

const UserDash = () => {
  return (
    <div className="user px-8 p-2 min-h-screen">
      <h1 className="text-3xl ml-12  font-bold mb-6 mt-10 float-left">
        User dashboard
      </h1>
      <Divider />
      <div className="flex gap-4 items-center mt-12 justify-center ">
        <Card className="max-w-[1000px] p-10 bg-slate-50">
          <CardHeader className="flex gap-3 items-center">
            <Image
              alt="nextui logo"
              radius="round"
              className="rounded-full p-4"
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
              width={200}
            />
            <div className="flex flex-col">
              <p className="text-xl font-semibold ">Mehak</p>
              <p className="text-sm text-black my-2">
                Hello, Mehak here! I am interested in working on your project. I
                believe that my skills and experience will be a good fit for
                this project, as well as my ability to work independently with
                limited supervision.
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Input
              disabled
              type="email"
              label="Email"
              defaultValue="kangmehak167@gmail.com"
              className="max-w-800 mb-2"
            />
            <Input
              disabled
              type="email"
              label="College name"
              defaultValue="IK GUJRAL PUNJAB TECHNICAL UNIVERSITY , KAPURTHALA"
              className="max-w-800 mb-2"
            />
            <Input
              disabled
              type="email"
              label="skills"
              defaultValue="HTML, CSS, JAVASCRIPT"
              className="max-w-800 mb-2"
            />
            <div className="flex gap-x-4">
              <a
                target="_tom"
                href="https://www.linkedin.com/in/mehak-45a190245/"
                className="p-3 mt-3 max-w-800 bg-teal-300 font-semibold hover:opacity-80 block  rounded-xl "
              >
                LinkedIn Link
              </a>
              <a
                target="_tomy"
                href="https://github.com/"
                className="p-3 mt-3 max-w-800 bg-teal-300 font-semibold hover:opacity-80 block  rounded-xl"
              >
                GitHub Link
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default UserDash;
