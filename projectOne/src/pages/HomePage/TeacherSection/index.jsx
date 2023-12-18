import React from 'react'

const TeacherSection = () => {
	return (
		<section className="teacher --scpadding">
			<div className="container">
				<div className="heading">
					<h2 className="heading__title title --t2">Đội Ngũ <span className="color--primary">CFD Circle</span></h2>
					<div className="heading__content">
						<p className="text">
							Đội ngủ giảng viên và mentor tâm huyết nhiều kinh nghiệm được tích luỹ từ những dự án thực
							tế sẽ đồng hành cùng bạn
							xuyên suốt quá trình học và con đường phát triển sự nghiệp.
						</p>
						<div className="control">
							<div className="control__prev">
								<img src="/img/icon-btn-control.svg" alt="icon prev" />
							</div>
							<div className="control__next">
								<img src="/img/icon-btn-control.svg" alt="icon next" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="teacher__list">
				<div className="container">
					<div className="teacher__list-inner">
						<div className="teacher__list-item">
							<div className="img">
								<img src="https://cfdcircle.vn/files/teachers/trannghia.jpg" alt="Giảng viên CFD" />
							</div>
							<div className="info">
								<p className="label">Creative Front-End Dev</p>
								<h3 className="title --t3">Trần Nghĩa</h3>
							</div>
						</div>
						<div className="teacher__list-item">
							<div className="img">
								<img src="https://cfdcircle.vn/files/teachers/huy.jpg" alt="Giảng viên CFD" />
							</div>
							<div className="info">
								<p className="label">Fullstack Dev</p>
								<h3 className="title --t3">Nguyễn Đức Huy</h3>
							</div>
						</div>
						<div className="teacher__list-item">
							<div className="img">
								<img src="https://cfdcircle.vn/files/teachers/thien.jpg" alt="Giảng viên CFD" />
							</div>
							<div className="info">
								<p className="label">Senior Front-end Dev</p>
								<h3 className="title --t3">Lê Châu Hữu Thiện</h3>
							</div>
						</div>
						<div className="teacher__list-item">
							<div className="img">
								<img src="https://cfdcircle.vn/files/teachers/kiet.jpg" alt="Giảng viên CFD" />
							</div>
							<div className="info">
								<p className="label">Front-end Dev</p>
								<h3 className="title --t3">Huỳnh Anh Kiệt</h3>
							</div>
						</div>
						<div className="teacher__list-item">
							<div className="img">
								<img src="https://cfdcircle.vn/files/teachers/an.jpg" alt="Giảng viên CFD" />
							</div>
							<div className="info">
								<p className="label">Senior Front-End Dev</p>
								<h3 className="title --t3">Nguyễn Văn Thái An</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TeacherSection