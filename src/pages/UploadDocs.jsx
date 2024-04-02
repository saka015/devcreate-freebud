
const UploadDocs = () => {
  const handleGithubChange = (event) => {
    console.log("Github ID:", event.target.value);
  };

  const handlePortfolioChange = (event) => {
    console.log("Portfolio Link:", event.target.value);
  };

  const handleResumeChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected resume:", selectedFile);
  };

  const handleProofChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected proof of study:", selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log("Form data:", formData);

  };

  return (
    <div className="min-h-screen">
      <h1 className="text-2xl font-semibold text-teal-500 p-4">
        Get yourself verified
      </h1>
      <div className="rounded-xl m-12 border bg-teal-50 px-8 py-2">
        <h2 className="bg-yellow-100 p-3 mx-96 text-center m-2 rounded-xl font-semibold">
          Upload Docs & fill details
        </h2>
        <form className="p-4" action="" onSubmit={handleSubmit}>
          <label className="text-teal-600 font-semibold my-2" htmlFor="github">
            Your Github ID
          </label>
          <input
            name="github"
            className="mb-3 w-full p-3 rounded-xl active:outline-teal-400 focus:outline-teal-400"
            type="url"
            required="true"
            placeholder="https://github.com/saka015"
            onChange={handleGithubChange}
          />
          <label
            className="text-teal-600 font-semibold my-2"
            htmlFor="portfolio"
          >
            Your Portfolio Link
          </label>
          <input
            name="portfolio"
            className="mb-3 w-full p-3 rounded-xl active:outline-teal-400 focus:outline-teal-400"
            type="url"
            required="true"
            placeholder="https://github.com/saka015"
            onChange={handlePortfolioChange}
          />
          <label className="text-teal-600 font-semibold my-2" htmlFor="resume">
            Upload resume
          </label>
          <input
            name="resume"
            className="mb-3 w-full p-3 rounded-xl active:outline-teal-400 focus:outline-teal-400"
            type="file"
            // Removed accept=".pdf" for unrestricted file selection
            required="true"
            placeholder="https://github.com/saka015"
            onChange={handleResumeChange}
          />
          <label className="text-teal-600 font-semibold my-2" htmlFor="proof">
            Proof of study (Any document that proves you as a student)
          </label>
          <input
            name="proof"
            className="mb-3 w-full p-3 rounded-xl active:outline-teal-400 focus:outline-teal-400"
            type="file"
            // Removed accept=".pdf" for unrestricted file selection
            required="true"
            placeholder="https://github.com/saka015"
            onChange={handleProofChange}
          />
          <button type='submit' className="w-full bg-green-200 hover:bg-green-300 hover:-translate-y-1 transition-all  font-semibold p-3 rounded-xl ">
            Send for Approval
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDocs;
