import React from 'react'

const Courses = () => {
  
  const mockCourses = [
    { id: 1, title: 'Full-Stack Web Development', level: 'ผู้เริ่มต้น', duration: '40 ชั่วโมง', price: '฿4,900' },
    { id: 2, title: 'Data Science & Machine Learning', level: 'ระดับกลาง', duration: '35 ชั่วโมง', price: '฿5,500' },
    { id: 3, title: 'UX/UI Design Masterclass', level: 'ทุกระดับ', duration: '20 ชั่วโมง', price: '฿2,900' }
  ]

  return (
    <div>
      <h2 className="text-dark mb-4 fw-bold border-bottom pb-2">คอร์สเรียนยอดนิยม</h2>
      <div className="row g-4">
        {mockCourses.map(course => (
          <div className="col-md-4" key={course.id}>
            <div className="card h-100 shadow-sm border border-light">
              <div className="card-body">
                <span className="badge bg-warning text-dark mb-2 fw-semibold">{course.level}</span>
                <h5 className="card-title fw-bold">{course.title}</h5>
                <p className="card-text text-muted mb-1">⏰ เวลาเรียน: {course.duration}</p>
                <h4 className="text-primary fw-bold mt-3">{course.price}</h4>
              </div>
              <div className="card-footer bg-transparent border-top-0 pb-3">
                <button className="btn btn-outline-dark w-100 fw-bold">ดูรายละเอียด</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses