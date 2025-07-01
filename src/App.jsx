import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Dashboard from "./dashboard/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";



import ListDEpartment from "./dashboard/ListDepartment";
import DepartmentApproval from "./dashboard/DepartmentApproval";
import ListCandidate from "./dashboard/ListCandidate";
import JobList from "./dashboard/JobList";
import ApprovalJob from "./dashboard/ApprovalJob";
import Logs from "./dashboard/Logs";
import Notification from "./dashboard/Notification";
import Settings from "./dashboard/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />S
        </Route>

        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/list-department" element={<ListDEpartment />} />
        <Route path="/dashboard/approval-dept" element={<DepartmentApproval />} />
        <Route path="/dashboard/list-candidate" element={<ListCandidate />} />
        <Route path="/dashboard/job-list" element={<JobList />} />
        <Route path="/dashboard/approval-job" element={<ApprovalJob />} />
        <Route path="/dashboard/logs" element={<Logs />} />
        <Route path="/dashboard/notification" element={<Notification />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;