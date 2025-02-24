import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/protected-route";
import Dashboard from "./app/dashboard/page";
import LoginPage from "./app/login/page";
import SystemSettings from "./app/dashboard/settings/SystemSettings";
import AccessRights from "./app/dashboard/settings/AccessRights";
import UserReport from "./app/dashboard/report/UserReport";
import ReservationReport from "./app/dashboard/report/ReservationReport";
import PaymentReport from "./app/dashboard/report/PaymentReport";
import PaymentTransactions from "./app/dashboard/payment/PaymentTransactions";
import PaymentMethod from "./app/dashboard/payment/PaymentMethod";
import HealthFacilities from "./app/dashboard/master/HealthFacilities";
import Specializations from "./app/dashboard/master/Specializations";
import HealthServices from "./app/dashboard/master/HealthServices";
import ReservationList from "./app/dashboard/reservation/ReservationList";
import ReservationHistory from "./app/dashboard/reservation/ReservationHistory";
import Schedule from "./app/dashboard/doctor_management/Schedule";
import Admin from "./app/dashboard/user_management/Admin";
import Doctor from "./app/dashboard/user_management/Doctor";
import SuperAdmin from "./app/dashboard/user_management/SuperAdmin";
import User from "./app/dashboard/user_management/User";
import NotFound from "./components/not-found";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            path="pengaturan/pengaturan-sistem"
            element={<SystemSettings />}
          />
          <Route path="pengaturan/hak-akses" element={<AccessRights />} />
          <Route path="laporan/laporan-pengguna" element={<UserReport />} />
          <Route
            path="laporan/laporan-reservasi"
            element={<ReservationReport />}
          />
          <Route
            path="laporan/laporan-pembayaran"
            element={<PaymentReport />}
          />
          <Route
            path="pembayaran/transaksi-pembayaran"
            element={<PaymentTransactions />}
          />
          <Route
            path="pembayaran/metode-pembayaran"
            element={<PaymentMethod />}
          />
          <Route
            path="master-data/fasilitas-kesehatan"
            element={<HealthFacilities />}
          />
          <Route
            path="master-data/spesialisasi-dokter"
            element={<Specializations />}
          />
          <Route
            path="master-data/jenis-layanan-kesehatan"
            element={<HealthServices />}
          />
          <Route
            path="reservasi/daftar-reservasi"
            element={<ReservationList />}
          />
          <Route
            path="reservasi/riwayat-reservasi"
            element={<ReservationHistory />}
          />
          <Route path="managemen-dokter/jadwal-dokter" element={<Schedule />} />
          <Route path="manajemen-pengguna/admin" element={<Admin />} />
          <Route path="manajemen-pengguna/user" element={<User />} />
          <Route
            path="manajemen-pengguna/super-admin"
            element={<SuperAdmin />}
          />
          <Route path="manajemen-pengguna/dokter" element={<Doctor />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
