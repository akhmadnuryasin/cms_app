import React, { useState } from "react";
import { InputForm } from "../Elements/Input/Index";
import { Button } from "../Elements/Button/Index";
import { HiOutlineKey, HiOutlineMail } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(email, password);
      }}
      className="p-0 mt-6 mb-0 space-y-4 rounded-lg"
    >
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Selamat Datang V2.0.0</h1>
        <p className="text-lg font-light text-slate-500">
          Masuk dan kelola dashboard Mediverse anda sekarang
        </p>
      </div>

      <InputForm
        type="email"
        text="Email"
        htmlFor="email"
        placeholder="Masukkan email"
        icon={<HiOutlineMail size={20} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputForm
        type="password"
        text="Password"
        htmlFor="password"
        placeholder="Masukkan kata sandi"
        icon={<HiOutlineKey size={20} />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p className="text-sm text-gray-500 text-end">
        <a className="text-sm text-gray-500 text-end" href="/forgot_password">
          Lupa Kata Sandi?
        </a>
      </p>

      <div className="flex justify-end mt-10">
        <Button
          type="submit"
          label="Masuk Sekarang"
          icon={<FiLogIn size={20} />}
          disabled={loading}
          style={{ borderRadius: "30px", backgroundColor: "#5600E9" }}
        />
      </div>
    </form>
  );
};

export default LoginForm;
