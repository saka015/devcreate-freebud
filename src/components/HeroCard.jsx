import { MdManageSearch } from "react-icons/md";
// import { FaUserCheck } from "react-icons/fa";
// import { MdVerifiedUser } from "react-icons/md";
// import { FaMoneyCheckDollar } from "react-icons/fa6";

const HeroCard = () => {
  return (
    <div className="bg-opacity-65 herocard border-1 border-gray-100 m-3 rounded-md p-4">
      <div className="bg-opacity-80 bg-teal-400 w-12 rounded-md shadow-md p-2">
        <MdManageSearch className="text-4xl" />
      </div>
      <p className="mt-4 text-gray-300 font-medium break-all text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        architecto, sit natus praesentium aperiam sint.
      </p>
    </div>
  );
};

export default HeroCard;
