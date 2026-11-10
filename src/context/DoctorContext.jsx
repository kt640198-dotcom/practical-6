import { createContext, useState } from "react";

export const DoctorContext = createContext();

export function DoctorContextProvider({ children }) {
  const [doctor, setDoctor] = useState({
    doctorId: 1,
    name: "Dr. Asha Mehta",
    specialization: "Cardiologist",
    experience: 15,
    email: "asha.mehta@hospital.com",
    patients: [
      {
        patientId: 101,
        name: "Rahul Shah",
        age: 45,
        disease: "Hypertension",
        admissionStatus: "Indoor",
      },
      {
        patientId: 102,
        name: "Priya Patel",
        age: 32,
        disease: "Migraine",
        admissionStatus: "Outdoor",
      },
    ],
  });

  const addPatient = (patient) => {
    setDoctor((previousDoctor) => ({
      ...previousDoctor,
      patients: [
        ...previousDoctor.patients,
        { ...patient, patientId: Date.now() },
      ],
    }));
  };

  const removePatient = (patientId) => {
    setDoctor((previousDoctor) => ({
      ...previousDoctor,
      patients: previousDoctor.patients.filter(
        (patient) => patient.patientId !== patientId
      ),
    }));
  };

  const updateDoctor = (updatedDetails) => {
    setDoctor((previousDoctor) => ({
      ...previousDoctor,
      ...updatedDetails,
    }));
  };

  return (
    <DoctorContext.Provider
      value={{ doctor, addPatient, removePatient, updateDoctor }}
    >
      {children}
    </DoctorContext.Provider>
  );
}