import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "@/components/Fragments/FormLogin";
import logo from "../../assets/logo.png";
import baner from "../../assets/baner5.jpg";

export default function LoginPage() {
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-start gap-2">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <img className="h-12 md:h-12" src={logo} alt="medpoint_logo" />
          </Link>
        </div>
        <div className="flex items-center justify-center flex-1">
          <div className="w-full max-w-md">
            <FormLogin onSubmit={login} loading={loading} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={baner}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
