/* eslint-disable react/prop-types */

const JobCard = (props) => {
  return (
    <div className="border p-3 m-4 rounded-xl flex justify-between">
      <div>
        <h1 className="font-bold text-xl">{props.title}</h1>
        <p className="text-lg">{props.desc}</p>
        <div>
          <button className="bg-gray-100 p-1 px-2 m-1 rounded-xl" disabled>
            {props.tech1}
          </button>
          <button className="bg-gray-100 p-1 px-2 m-1 rounded-xl" disabled>
            {props.tech2}
          </button>
          <button className="bg-gray-100 p-1 px-2 m-1 rounded-xl" disabled>
            {props.tech3}
          </button>
        </div>
        <button
          className="rounded-xl my-2 bg-orange-100 font-bold p-2 px-6 m-1"
          disabled
        >
          {props.price}
        </button>
      </div>
      <div className="flex-end">
        <button className="p-2 bg-teal-200 rounded-xl px-6 text-xl bg-opacity-50 hover:bg-opacity-100">
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
