import { useParams } from "react-router-dom";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useState, useEffect } from "react";

const ApplyJobs = () => {
  const { jobId } = useParams();
  const [proposal, setProposal] = useState("");
  const [duration, setDuration] = useState("");
  const [bid, setBid] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      proposal: proposal,
      duration: duration,
      bid: bid,
    };

    try {
      const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful submission, e.g., show a success message
        console.log("Submission successful!");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const job = jobs.find((job) => job.job_id === jobId);

  if (!job) {
    return <p>Job not found!</p>;
  }
  return (
    <div className="m-12 ml-24">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold">{job.title}</h1>
        <p className="my-2  text-gray-400">{job.job_description}</p>
        <Textarea
          label="Proposal"
          variant="bordered"
          placeholder="Enter your proposal"
          disableAnimation
          disableAutosize
          classNames={{
            base: "max-w-[600px] bg-violet-50 rounded-xl ",
            input: "resize-y min-h-[40px] ",
          }}
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
        />
        <br />
        <Input
          type="text"
          color="warning"
          label="How many days it will take?"
          placeholder="eg. 7"
          className="w-64"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <Input
          type="text"
          color="secondary"
          label="Your bid"
          placeholder="eg. $10"
          className="w-64 my-3"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
        <Divider className="my-4" />
        <button
          type="submit"
          className="bg-teal-400 rounded-xl p-3 px-6 font-semibold hover:bg-teal-500 active:scale-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyJobs;
