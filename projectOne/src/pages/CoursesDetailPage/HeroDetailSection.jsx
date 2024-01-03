import { message } from "antd";
import Button from "../../components/Button";

const HeroDetailSection = ({ image, name, title, startDate, teacherInfo = {}, price, orderLink, duration, tagsJoin ,activeCourse}) => {

	const _onCopyLink = (e) => {
		e.preventDefault();
		navigator.clipboard.writeText(window.location.href);
		message.success("Đã copy đường dẫn khoá học này");
	};

	return (
		<section className="hero herodetail">
			<div className="hero__content">
				<div className="container">
					<h3 className="category label --white">{title || ""}</h3>
					<h2 className="title --white">{name || ""}</h2>
					<div className="infor">
						<div className="infor__item">
							<label className="label --white">Khai giảng</label>
							<p className="title --t3 --white">{startDate || ""}</p>
						</div>
						<div className="infor__item">
							<label className="label --white">Thời lượng</label>
							<p className="title --t3 --white">{duration || "--"} buổi</p>
						</div>
						<div className="infor__item">
							<label className="label --white">Hình thức</label>
							<p className="title --t3 --white">{tagsJoin}</p>
						</div>
					</div>
					{/* Chưa đăng ký */}

					{!!!activeCourse&&<Button link={orderLink} variant="regcourse">Đăng ký</Button>}

					{/* Đã đăng ký */}
					
					{!!activeCourse&&<Button variant="disable" >Đã đăng ký</Button>}
				</div>
			</div>
			<div className="hero__bottom">
				<div className="container-fluid">
					<a href={"#"} className="user">
						<div className="user__img">
							<img src={teacherInfo.image} alt={teacherInfo.name} />
						</div>
						<p className="user__name --white">{teacherInfo.name}</p>
					</a>
					<div className="pricebox">
						<p className="title --t3 --white">{price} VND</p>
					</div>
					<a href={"#"} onClick={_onCopyLink} className="sharebox s--white">
						Chia sẻ
						<i>
							<img
								src="https://cfdcircle.vn/img/iconshare.svg"
								alt="CFD Circle"
							/>
						</i>
					</a>
				</div>
			</div>
			<div className="hero__background">
				<img
					className="hero__background-img"
					src={image || ""}
					alt="CFD Circle"
				/>
			</div>
		</section>
	)
}

export default HeroDetailSection