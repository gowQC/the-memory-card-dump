import RegistrationForm from "../components/RegistrationForm";
import LoginNavbar from "../components/LoginNavbar";

export default function RegisterPage() {
  return (
    <>
      <div className="h-screen">
        <LoginNavbar />
        <RegistrationForm />
      </div>
    </>
  );
}
