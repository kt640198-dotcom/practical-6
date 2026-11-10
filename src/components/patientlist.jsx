import { useContext } from "react";
import { DoctorContext } from "../context/DoctorContext";

function PatientList() {
  const { doctor, removePatient } = useContext(DoctorContext);

  return (
    <div className="card">
      <h2>Assigned Patients</h2>

      {doctor.patients.length === 0 ? (
        <p>No patients assigned.</p>
      ) : (
        doctor.patients.map((patient) => (
          <div className="patient" key={patient.patientId}>
            <h3>{patient.name}</h3>

            <p><strong>Patient ID:</strong> {patient.patientId}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Disease:</strong> {patient.disease}</p>
            <p>
              <strong>Admission Status:</strong>{" "}
              {patient.admissionStatus}
            </p>

            <button
              type="button"
              className="remove-btn"
              onClick={() => removePatient(patient.patientId)}
            >
              Remove Patient
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default PatientList;