import { useContext, useState } from "react";
import { DoctorContext } from "../context/DoctorContext";

function AssignPatientForm() {
  const { addPatient } = useContext(DoctorContext);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    disease: "",
    admissionStatus: "Outdoor",
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

    addPatient({
      name: formData.name.trim(),
      age: Number(formData.age),
      disease: formData.disease.trim(),
      admissionStatus: formData.admissionStatus,
    });

    setFormData({
      name: "",
      age: "",
      disease: "",
      admissionStatus: "Outdoor",
    });
  };

  return (
    <div className="card">
      <h2>Assign New Patient</h2>

      <form onSubmit={handleSubmit}>
        <label>Patient Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
        />

        <label>Disease</label>
        <input
          type="text"
          name="disease"
          value={formData.disease}
          onChange={handleChange}
          required
        />

        <label>Admission Status</label>
        <select
          name="admissionStatus"
          value={formData.admissionStatus}
          onChange={handleChange}
        >
          <option value="Outdoor">Outdoor</option>
          <option value="Indoor">Indoor</option>
        </select>

        <button type="submit">Assign Patient</button>
      </form>
    </div>
  );
}

export default AssignPatientForm;