import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import { CiSearch } from "react-icons/ci";


const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/all_jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className='min-h-screen'>
      <div className="flex  bg-tea-200 text-3xl rounded-xl p- border m-4 mx-48 mt-6">
        <CiSearch className="mt-3 text-4xl mx-2" />
        <input
          className="h-full w-full  rounded-xl focus:outline-none  p-2 text-normal font-extralight"
          type="text"
          placeholder="Search for jobs..."
        />
      </div>
      <div className="border p-4 m-4 rounded-xl">
        {jobs.map((job) => (
          <Link key={job.job_id} to={`/apply/${job.job_id}`}>
            <JobCard
              title={job.title}
              desc={job.description}
              tech1={job.skill1}
              tech2={job.skill2}
              tech3={job.skill3}
              price={job.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
