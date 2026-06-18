import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
      <div className="container-fluid py-5 text-center">
        <h1 className="display-4 fw-bold text-dark">ยินดีต้อนรับสู่ CourseOnline </h1>
        <p className="col-md-8 mx-auto fs-5 text-secondary my-4">
          ยกระดับทักษะของคุณด้วยคอร์สเรียนออนไลน์ที่หลากหลาย สอนโดยผู้เชี่ยวชาญจากอุตสาหกรรมจริง เรียนรู้ได้ทุกที่ ทุกเวลา เริ่มต้นสร้างอนาคตของคุณวันนี้!
        </p>
        <Link className="btn btn-warning btn-lg fw-bold px-4" to="/courses">ดูคอร์สเรียนทั้งหมด</Link>
      </div>
    </div>
  )
}

export default Home