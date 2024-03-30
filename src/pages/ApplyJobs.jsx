// import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
// import { Divider } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";
// import { Textarea } from "@nextui-org/react";
// import { Button } from "@nextui-org/react";

// const jobs = [
//   {
//     job_id: "1",
//     job_title: "Senior Software Developer",
//     job_description:
//       "Developing robust software solutions using Java, Python, and JavaScript technologies for Tech Innovations Inc.",
//     job_skill1: "Java",
//     job_skill2: "Python",
//     job_skill3: "JavaScript",
//     job_price: "$5000",
//   },
//   {
//     job_id: "2",
//     job_title: "Data Analyst",
//     job_description:
//       "Analyzing data sets, creating visualizations, and deriving insights using SQL, data visualization, and statistical methods.",
//     job_skill1: "SQL",
//     job_skill2: "Data Visualization",
//     job_skill3: "Statistics",
//     job_price: "$4000",
//   },
//   {
//     job_id: "3",
//     job_title: "Graphic Designer",
//     job_description:
//       "Creating visually appealing designs with Adobe Photoshop and Illustrator, specializing in UI/UX design for Creative Designs Ltd.",
//     job_skill1: "Adobe Photoshop",
//     job_skill2: "Illustrator",
//     job_skill3: "UI/UX Design",
//     job_price: "$3500",
//   },
//   {
//     job_id: "4",
//     job_title: "Marketing Specialist",
//     job_description:
//       "Executing marketing campaigns, optimizing SEO, managing content creation for MarketBoost Agency.",
//     job_skill1: "Social Media Marketing",
//     job_skill2: "SEO",
//     job_skill3: "Content Creation",
//     job_price: "$4500",
//   },
//   {
//     job_id: "5",
//     job_title: "Customer Support Representative",
//     job_description:
//       "Providing excellent customer service, resolving issues, and managing CRM software for SupportPro Inc.",
//     job_skill1: "Communication Skills",
//     job_skill2: "Problem Solving",
//     job_skill3: "CRM Software",
//     job_price: "$3000",
//   },
// ];

// const ApplyJobs = () => {
//   const { jobId } = useParams(); // Get the jobId from URL parameters

//   // Find the job object based on jobId
//   const job = jobs.find((job) => job.job_id === jobId);

//   if (!job) {
//     return <p>Job not found!</p>;
//   }

//   return (
//     <div className="m-12 ml-24">
//       <form action="">
//         <h1 className="text-3xl font-semibold">{job.job_title}</h1>
//         <p className="my-2  text-gray-400">{job.job_description}</p>
//         <div className="mt-10 h-24">
//           <Textarea
//             label="Proposal"
//             variant="bordered"
//             placeholder="Enter your proposal"
//             disableAnimation
//             disableAutosize
//             classNames={{
//               base: "max-w-[600px] bg-violet-50 rounded-xl ",
//               input: "resize-y min-h-[40px] ",
//             }}
//           ></Textarea>
//           <br />
//           <Input
//             type="text"
//             color="warning"
//             label="How many days it will take?"
//             placeholder="eg. 7"
//             className="w-64"
//           />
//           <Input
//             type="text"
//             color="secondary"
//             label="Your bid"
//             placeholder="eg. $10"
//             className="w-64 my-3"
//           />
//           <Divider className="my-4" />
//           <button
//             type="submit"
//             className="bg-teal-400 rounded-xl p-3 px-6 font-semibold hover:bg-teal-500 active:scale-90"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyJobs;

import { useParams } from "react-router-dom";
import { useState } from "react"; // Import useState to manage state
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const ApplyJobs = () => {
  const { jobId } = useParams();
  const [proposal, setProposal] = useState(""); // State for proposal
  const [duration, setDuration] = useState(""); // State for duration
  const [bid, setBid] = useState(""); // State for bid

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

  return (
    <div className="m-12 ml-24">
      <form onSubmit={handleSubmit}>
        {/* Rest of your JSX */}
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
