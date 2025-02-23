import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../src/app/dashboard/page";
import LoginPage from "../src/app/login/page";
import SystemSettings from "../src/app/dashboard/settings/SystemSettings";
import AccessRights from "../src/app/dashboard/settings/AccessRights";
import UserReport from "../src/app/dashboard/report/UserReport";
import ReservationReport from "../src/app/dashboard/report/ReservationReport";
import PaymentReport from "../src/app/dashboard/report/PaymentReport";
import PaymentTransactions from "./app/dashboard/payment/PaymentTransactions";
import PaymentMethod from "./app/dashboard/payment/PaymentMethod";
import HealthFacilities from "./app/dashboard/master/HealthFacilities";
import Specializations from "./app/dashboard/master/Specializations";
import HealthServices from "./app/dashboard/master/HealthServices";
import ReservationList from "./app/dashboard/reservation/ReservationList";
import ReservationHistory from "./app/dashboard/reservation/ReservationHistory";
import Schedule from "./app/dashboard/doctor_management/Schedule";
import UsersAdmin from "./app/dashboard/user_management/UsersAdmin";
import UsersDoctor from "./app/dashboard/user_management/UsersDoctor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="system_settings" element={<SystemSettings />} />
        <Route path="access_rights_and_controls" element={<AccessRights />} />
        <Route path="user_report" element={<UserReport />} />
        <Route path="reservation_report" element={<ReservationReport />} />
        <Route path="payment_report" element={<PaymentReport />} />
        <Route path="payment_transactions" element={<PaymentTransactions />} />
        <Route path="payment_methods" element={<PaymentMethod />} />
        <Route path="health_facilities" element={<HealthFacilities />} />
        <Route path="specializations" element={<Specializations />} />
        <Route path="health_services" element={<HealthServices />} />
        <Route path="reservations" element={<ReservationList />} />
        <Route path="reservations_history" element={<ReservationHistory />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="users_admin" element={<UsersAdmin />} />
        <Route path="users_doctor" element={<UsersDoctor />} />
      </Route>
    </Routes>
  );
}

export default App;
