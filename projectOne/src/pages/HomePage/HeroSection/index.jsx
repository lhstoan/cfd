import { useNavigate } from "react-router-dom";
import { MODAL_TYPES } from "../../../config/config-general";
import { useAuthContext } from "../../../context/AuthContext";
import tokenMethod from "../../../utils/token";
import PATHS from "../../../config/config-path";

// main.js
function loadVideoBG() {
	let videoBgWrap = $(".hero__background-video"),
		srcVideoBg = videoBgWrap.data("src");
	setTimeout(function () {
		videoBgWrap.html(
			'<video preload="none" autoplay loop muted playsinline><source src="' +
			srcVideoBg +
			'" type="video/mp4">Your browser does not support the video tag.</video>'
		);
	}, 500);
}
loadVideoBG();

const HeroSection = () => {
	const { handleShowModal } = useAuthContext();
	const navigate = useNavigate();
	const _onStart = () => {
		if (!!tokenMethod.get()) {
			navigate(PATHS.PROFILE.MY_COURSE)
		} else {
			handleShowModal?.(MODAL_TYPES.login);
		}
	}
	return (
		<section className="hero">
			<div className="hero__content">
				<div className="container">
					<h1 className="title --white">Học Viện Đào Tạo<br /> Lập Trình Front-End Thực Chiến</h1>
					<p className="text">Dạy từ kinh nghiệm, học từ thực tế để tạo ra sản phẩm có giá trị.</p>
					<div className="btn btn--primary btnmodal" data-modal="mdlogin" onClick={_onStart}>Bắt đầu học</div>
				</div>
			</div>
			<div className="hero__bottom">
				<div className="container-fluid">
					<div className="hero__bottom-social">
						<a href="https://www.facebook.com/cfdcircle" target="_blank" rel="noreferrer"><img src="/img/icon-facebook.svg" alt="Facebook CFD" /></a>
						<a href="https://www.youtube.com/cfdcircle" target="_blank" rel="noreferrer"><img src="/img/icon-youtube.svg" alt="Youtube CFD" /></a>
					</div>
				</div>
			</div>
			<div className="hero__background">
				<img className="hero__background-img" src="/img/bg-hero-home.jpg" alt="CFD Training Background" />
				<div className="hero__background-video" data-src="video/CFD-video-bg2.mp4" />
			</div>
		</section>
	)
}

export default HeroSection