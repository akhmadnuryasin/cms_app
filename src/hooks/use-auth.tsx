import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import supabase from "../services/supabaseClient";
import { User } from "@supabase/supabase-js";
import "react-toastify/dist/ReactToastify.css";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        setUser(null);
      } else {
        setUser(data.user);
      }

      setLoading(false);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Login gagal: " + error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.success("Login berhasil!", {
        position: "top-right",
        autoClose: 3000,
      });
      setUser(data.user);
      navigate("/dashboard");
    }

    setLoading(false);
  };

  // Fungsi logout
  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    toast.info("Anda telah logout.", {
      position: "top-right",
      autoClose: 3000,
    });
    navigate("/login");
  };

  return { user, isAuthenticated: !!user, loading, login, logout };
};
