import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminSignup from './pages/AdminSignup';
import StudentSignup from './pages/StudentSignup';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
import QuestionSetting from './pages/QuestionSetting';
import TeacherDashboard from './pages/TeacherDashboard';
import QuestionsSolving from './pages/QuestionsSolving';
import StudentDashboard from './pages/StudentDashboard';
import Navbar from './components/Navbar';
import PrivateRouteTeacher from './components/PrivateRouteTeacher';
import PrivateRouteStudent from './components/PrivateRouteStudent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/studentsignup' element={<StudentSignup />} />
        <Route path='/adminsignup' element={<AdminSignup />} />
        <Route path='/studentlogin' element={<StudentLogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />

        {/* Private routes for teachers */}
        <Route element={<PrivateRouteTeacher />}>
          <Route path='/QuestionSetting' element={<QuestionSetting />} />
          <Route path='/teacherdashboard' element={<TeacherDashboard />} />
        </Route>

        {/* Private routes for students */}
        <Route element={<PrivateRouteStudent />}>
          <Route path='/questionsolving' element={<QuestionsSolving />} />
          <Route path='/studentdashboard' element={<StudentDashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
