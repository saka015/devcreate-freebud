// import {useState} from "react"
// import { CiSearch } from "react-icons/ci";
// import JobCard from "../components/JobCard";

const jobs = [
  {
    job_id: "1",
    job_title: "Senior Software Developer",
    job_description:
      "Developing robust software solutions using Java, Python, and JavaScript technologies for Tech Innovations Inc.",
    job_skill1: "Java",
    job_skill2: "Python",
    job_skill3: "JavaScript",
    job_price: "$5000",
  },
  {
    job_id: "2",
    job_title: "Data Analyst",
    job_description:
      "Analyzing data sets, creating visualizations, and deriving insights using SQL, data visualization, and statistical methods.",
    job_skill1: "SQL",
    job_skill2: "Data Visualization",
    job_skill3: "Statistics",
    job_price: "$4000",
  },
  {
    job_id: "3",
    job_title: "Graphic Designer",
    job_description:
      "Creating visually appealing designs with Adobe Photoshop and Illustrator, specializing in UI/UX design for Creative Designs Ltd.",
    job_skill1: "Adobe Photoshop",
    job_skill2: "Illustrator",
    job_skill3: "UI/UX Design",
    job_price: "$3500",
  },
  {
    job_id: "4",
    job_title: "Marketing Specialist",
    job_description:
      "Executing marketing campaigns, optimizing SEO, managing content creation for MarketBoost Agency.",
    job_skill1: "Social Media Marketing",
    job_skill2: "SEO",
    job_skill3: "Content Creation",
    job_price: "$4500",
  },
  {
    job_id: "5",
    job_title: "Customer Support Representative",
    job_description:
      "Providing excellent customer service, resolving issues, and managing CRM software for SupportPro Inc.",
    job_skill1: "Communication Skills",
    job_skill2: "Problem Solving",
    job_skill3: "CRM Software",
    job_price: "$3000",
  },
];

// const AllJobs = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredJobs = jobs.filter(
//     (job) =>
//       job.job_skill1.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.job_skill2.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.job_skill3.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="flex  bg-tea-200 text-3xl rounded-xl p- border m-4 mx-48 mt-6">
//         <CiSearch className="mt-3 text-4xl mx-2" />
//         <input
//           className="h-full w-full  rounded-xl focus:outline-none  p-2 text-normal font-extralight"
//           type="text"
//           onChange={handleSearch}
//           placeholder="Search for jobs..."
//         />
//       </div>

//       <div className="border p-4 m-4 rounded-xl">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map((job) => (
//             <JobCard
//               key={job.job_id}
//               title={job.job_title}
//               desc={job.job_description}
//               tech1={job.job_skill1}
//               tech2={job.job_skill2}
//               tech3={job.job_skill3}
//               price={job.job_price}
//             />
//           ))
//         ) : (
//           <p className='text-center rounded-xl bg-yellow-50 mx-96 p-3'>No jobs found for this search keyword</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AllJobs;

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"; // Import Link from React Router
import JobCard from "../components/JobCard";

const AllJobs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.job_skill1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.job_skill2.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.job_skill3.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex  bg-tea-200 text-3xl rounded-xl p- border m-4 mx-48 mt-6">
        <CiSearch className="mt-3 text-4xl mx-2" />
        <input
          className="h-full w-full  rounded-xl focus:outline-none  p-2 text-normal font-extralight"
          type="text"
          onChange={handleSearch}
          placeholder="Search for jobs..."
        />
      </div>

      <div className="border p-4 m-4 rounded-xl">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Link key={job.job_id} to={`/apply/${job.job_id}`}>
              {" "}
              {/* Link to the ApplyJobs page with job_id as URL parameter */}
              <JobCard
                title={job.job_title}
                desc={job.job_description}
                tech1={job.job_skill1}
                tech2={job.job_skill2}
                tech3={job.job_skill3}
                price={job.job_price}
              />
            </Link>
          ))
        ) : (
          <p className="text-center rounded-xl bg-yellow-50 mx-96 p-3">
            No jobs found for this search keyword
          </p>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
