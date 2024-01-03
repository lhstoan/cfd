import { message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { orderService } from '../../services/orderService';
import Button from './../../components/Button/index';
import { Roles } from './../../config/config-roles';
import useMutation from './../../hooks/useMutation';
import { courseService } from './../../services/courseService';
import { formatCurrency } from './../../utils/format';
import FormOrder from './FormOrder';
import InfoOrder from './InfoOrder';
import PaymentOrder from './PaymentOrder';

const CoursesOrderPage = () => {
	const { profile, courseInfo, handleGetProfileCourse, handleGetProfilePayment } = useAuthContext();
	const { courseSlug } = useParams();
	const [paymentMethod, setPaymentMethod] = useState("");
	const navigate = useNavigate();
	const FormOrderRef = useRef();
	const isDone = courseInfo.some((item) => item?.course?.slug === courseSlug);
	const activeCourse = courseInfo.find((item) => item?.course?.slug === courseSlug)
	// call api
	const { data: courseDetailData, execute: executeCourseDetail } = useMutation(
		courseService.getCourseBySlug
	);
	const { loading: orderLoading, execute: orderCourse } = useMutation(
		orderService.orderCourse
	);
	useEffect(() => {
		if (courseSlug) {
			executeCourseDetail(courseSlug, {})
		}
	}, [courseSlug]);

	// Modify render data
	const { teams, price, tags } = courseDetailData || {};

	// Child props
	const InfoOrderProps = {
		...courseDetailData,
		teacherInfo: teams?.find((item) => item.tags.includes(Roles.Teacher)) || {},
		price: formatCurrency(price),
	};

	const _onOrder = () => {
		const profileError = FormOrderRef.current.validate();
		const form = FormOrderRef.current.form;
		if (!Object.keys(profileError).length > 0) {
			if (paymentMethod) {
				// setup payload
				const payload = {
					name: form?.name,
					phone: form?.phone,
					course: courseDetailData?.id,
					type: form.type,
					paymentMethod,
				};
				orderCourse(payload, {
					onSuccess: async () => {
						message.success("Đăng ký thành công!");
						await handleGetProfileCourse();
						await handleGetProfilePayment();
						navigate(PATHS.PROFILE.MY_COURSE);
					},
					onFail: () => {
						message.error("Đăng ký thất bại !!!")
					},
				})
			} else {
				message.error("Vui lòng chọn hình thức thanh toán");
			}
		}
	}
	// function select payment
	const handlePaymentMethodChange = (payment) => {
		setPaymentMethod(payment);
	};


	return (
		<main className="mainwrapper --ptop">
			<section className="sccourseorder">
				<div className="container small">
					<InfoOrder {...InfoOrderProps} />
					<FormOrder profile={profile} types={tags} disabled={isDone} ref={FormOrderRef} />
					{!!!isDone && <PaymentOrder handleChange={handlePaymentMethodChange} selectedPayment={paymentMethod} />}
					<Button style={{ width: "100%" }} onClick={_onOrder} loading={orderLoading} disabled={isDone} >
						<span>{isDone ? "Đã đăng ký" : "Đăng ký khoá học"}</span>
					</Button>
				</div>
			</section>
		</main>

	)
}

export default CoursesOrderPage