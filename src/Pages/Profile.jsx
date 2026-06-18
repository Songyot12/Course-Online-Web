import React from 'react'

const Profile = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-sm border">
          <div className="card-header bg-dark text-white py-3">
            <h5 className="mb-0 fw-bold">ข้อมูลโปรไฟล์ผู้ใช้</h5>
          </div>
          <div className="card-body text-center py-4">
            <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold fs-2 mx-auto mb-3 shadow-sm" style={{ width: '80px', height: '80px' }}>
              ST
            </div>
            <h4 className="fw-bold text-dark mb-1">สมศักดิ์ ตั้งใจเรียน</h4>
            <p className="text-muted mb-4 small">Somsak.t@email.com</p>
            
            <hr />
            
            <div className="text-start px-3">
              <p className="mb-2"><strong>สถานะบัญชี:</strong> <span className="badge bg-success">Premium Member</span></p>
              <p className="mb-2"><strong>คอร์สที่ลงทะเบียนแล้ว:</strong> 2 คอร์ส</p>
              <p className="mb-0"><strong>วันที่เข้าร่วม:</strong> 18 มิถุนายน 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile