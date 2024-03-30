import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import UploadDocs from "./pages/UploadDocs";
// import UserDash from "./pages/UserDash";
import AllJobs from "./pages/AllJobs";
import ApplyJobs from "./pages/ApplyJobs";
// import AdminDash from "./pages/AdminDash";
import EmployeerDash from "./pages/EmployeerDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all_jobs" element={<AllJobs />} />
          <Route exact path="/apply/:jobId" element={<ApplyJobs />} />{" "}
          {/* Define route for applying to jobs */}
          <Route exact path="/employeer_dash" element={<EmployeerDash />} />
        </Routes>
      </Router>
    </>
  );
}

          // <Route exact path="/" element={<Home />} />
          // {/* <Route exact path="/register" element={<Register />} /> */}
          // {/* <Route exact path="/login" element={<Login />} /> */}
          // {/* <Route exact path="/upload_docs" element={<UploadDocs />} /> */}
          // {/* <Route exact path="/user_dashboard" element={<UserDash />} /> */}
          // <Route exact path="/all_jobs" element={<AllJobs />} />
          // {/* <Route exact path="/apply_jobs" element={<ApplyJobs />} /> */}
          // {/* <Route exact path="/admin_dash" element={<AdminDash />} /> */}
          // <Route exact path="/employeer_dash" element={<EmployeerDash />} />