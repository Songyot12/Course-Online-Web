import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text-center py-5 my-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fw-bold text-dark my-3">ไม่พบหน้าเว็บที่คุณค้นหา</h2>
      <p className="text-secondary col-md-6 mx-auto mb-4">
        ขออภัยด้วยครับ ดูเหมือนว่า URL ที่คุณกรอกจะไม่ถูกต้อง หรือหน้านี้อาจจะถูกลบออกไปแล้ว
      </p>
      <Link className="btn btn-dark fw-bold px-4 shadow-sm" to="/">กลับสู่หน้าแรก</Link>
    </div>
  )
}

export default NotFound