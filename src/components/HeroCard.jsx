import { MdManageSearch } from "react-icons/md";
// import { FaUserCheck } from "react-icons/fa";
// import { MdVerifiedUser } from "react-icons/md";
// import { FaMoneyCheckDollar } from "react-icons/fa6";


const HeroCard = () => {
  return (
    <div className="bg-opacity-65 bg-yellow-200 border-1 shadow-lg border-teal-100 m-3 rounded-md p-4">
      <div className="bg-opacity-40 bg-blue-400 w-12 rounded-md shadow-md p-2">
        <MdManageSearch className="text-4xl" />
      </div>
      <p className="mt-4 text-black-300 font-medium break-all text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        architecto, sit natus praesentium aperiam sint. <button className="bg-teal-50 mt-4 rounded-xl p-2">Learn more</button>
      </p>
    </div>
  );
};

export default HeroCard;
