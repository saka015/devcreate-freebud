import { Button } from "@nextui-org/react";

export default function App({ children }) {
  return (
    <Button
      radius="full"
      className=" bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
    >
      {children}
    </Button>
  );
}
