import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login'
import OtpPage from "./pages/OtpPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/otpPage" element={<OtpPage/>} />
    </Routes>
  );
}

export default App;
