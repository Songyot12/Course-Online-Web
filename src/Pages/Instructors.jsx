import React from 'react'

const Instructors = () => {
  const mockInstructors = [
    { id: 1, name: 'อ.สมชาย สายโค้ด', expert: 'Full-Stack Developer', bio: 'ประสบการณ์พัฒนาเว็บมากกว่า 10 ปี อดีตวิศวกรซอฟต์แวร์ที่บริษัทสตาร์ทอัปชื่อดัง' },
    { id: 2, name: 'ดร.สมศรี มีข้อมูล', expert: 'Data Scientist', bio: 'ผู้เชี่ยวชาญด้านปัญญาประดิษฐ์และการวิเคราะห์ข้อมูล จบการศึกษาจากมหาวิทยาลัยชั้นนำ' }
  ]

  return (
    <div>
      <h2 className="text-dark mb-4 fw-bold border-bottom pb-2">ทำความรู้จักกับผู้สอน</h2>
      <div className="row g-4">
        {mockInstructors.map(inst => (
          <div className="col-md-6" key={inst.id}>
            <div className="card shadow-sm h-100 border">
              <div className="card-body d-flex align-items-start gap-3">
                <div className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold fs-4 shadow-sm" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
                  {inst.name[3]}
                </div>
                <div>
                  <h5 className="card-title fw-bold mb-1">{inst.name}</h5>
                  <h6 className="text-primary mb-2 fw-semibold">{inst.expert}</h6>
                  <p className="card-text text-secondary small">{inst.bio}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instructors