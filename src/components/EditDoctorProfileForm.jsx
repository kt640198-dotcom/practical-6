import { useContext, useState } from "react";
import { DoctorContext } from "../context/DoctorContext";

function EditDoctorProfileForm() {
  const { doctor, updateDoctor } = useContext(DoctorContext);

  const [formData, setFormData] = useState({
    name: doctor.name,
    specialization: doctor.specialization,
    experience: doctor.experience,
    email: doctor.email,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateDoctor({
      ...formData,
      experience: Number(formData.experience),
    });

    alert("Doctor profile updated successfully!");
  };

  return (
    <div className="card">
      <h2>Edit Doctor Profile</h2>

      <form onSubmit={handleSubmit}>
        <label>Doctor Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Specialization</label>
        <select
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        >
          <option value="Cardiologist">Cardiologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Pediatrician">Pediatrician</option>
        </select>

        <label>Experience (Years)</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          min="0"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditDoctorProfileForm;