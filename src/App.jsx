import { DoctorContextProvider } from "./context/DoctorContext";
import DoctorProfile from "./components/DoctorProfile";
import PatientList from "./components/PatientList";
import AssignPatientForm from "./components/AssignPatientForm";
import EditDoctorProfileForm from "./components/EditDoctorProfileForm";
import "./App.css";

function App() {
  return (
    <DoctorContextProvider>
      <div className="container">
        <h1>Hospital Doctor-Patient Management</h1>

        <DoctorProfile />

        <EditDoctorProfileForm />

        <AssignPatientForm />

        <PatientList />
      </div>
    </DoctorContextProvider>
  );
}

export default App;