import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'

// อิมพอร์ตหน้าต่าง ๆ
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Instructors from './Pages/Instructors'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <Router>
      {/* ส่วนหัวแถบเมนู (Navbar) จาก Bootstrap 5 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold text-warning" to="/">CourseOnline</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-collapse navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-warning" : "nav-link"} to="/">หน้าแรก</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-warning" : "nav-link"} to="/courses">คอร์สเรียน</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-warning" : "nav-link"} to="/instructors">ผู้สอน</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => isActive ? "nav-link active fw-bold text-warning" : "nav-link"} to="/profile">โปรไฟล์</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ส่วนเนื้อหาหลัก (Main Content) */}
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} /> {/* ดักจับหน้า 404 */}
        </Routes>
      </main>

      {/* ส่วนท้าย (Footer) */}
      <footer className="bg-light text-center text-secondary py-3 border-top mt-auto">
        <p className="mb-0">© 2026 CourseOnline Web. All rights reserved.</p>
      </footer>
    </Router>
  )
}

export default App