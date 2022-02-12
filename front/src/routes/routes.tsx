import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Student } from "../pages/student";
import { AllStudents } from "../pages/allStudents";
import { Register } from "../pages/register";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/onestudent/:cpf" element={<Student />} />
      <Route path="/studets" element={<AllStudents />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
