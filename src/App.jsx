import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UploadDocs from "./pages/UploadDocs";
import UserDash from "./pages/UserDash.jsx";
import AllJobs from "./pages/AllJobs.jsx";
import ApplyJobs from "./pages/ApplyJobs";
// import AdminDash from "./pages/AdminDash";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterEmp from "./pages/RegisterEmp";
import LoginEmp from "./pages/LoginEmp";
import EmployerDash from "./pages/EmployerDash";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createnewjob" element={<EmployerDash />} />
          <Route exact path="/createuser" element={<Register />} />
          <Route exact path="/createemployer" element={<RegisterEmp />} />
          <Route exact path="/loginuser" element={<Login />} />
          <Route exact path="/loginemployer" element={<LoginEmp />} />
          <Route exact path="/upload_docs" element={<UploadDocs />} />
          {/* <Route exact path="/user_dashboard" element={<UserDash />} /> */}
          <Route exact path="/all_jobs" element={<AllJobs />} />
          <Route exact path="/apply/:jobId" element={<ApplyJobs />} />{" "}
          <Route exact path="/user_dash" element={<UserDash />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
