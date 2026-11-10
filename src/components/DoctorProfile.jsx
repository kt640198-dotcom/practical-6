import { useContext } from "react";
import { DoctorContext } from "../context/DoctorContext";

function DoctorProfile() {
  const { doctor } = useContext(DoctorContext);

  return (
    <div className="card">
      <h2>Doctor Profile</h2>

      <p><strong>Doctor ID:</strong> {doctor.doctorId}</p>
      <p><strong>Name:</strong> {doctor.name}</p>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Experience:</strong> {doctor.experience} years</p>
      <p><strong>Email:</strong> {doctor.email}</p>
    </div>
  );
}

export default DoctorProfile;