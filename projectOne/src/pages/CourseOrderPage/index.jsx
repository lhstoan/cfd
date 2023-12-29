import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { orderService } from '../../services/orderService';
import { regrexRule, requireRule } from '../../utils/validate';
import Button from './../../components/Button/index';
import { Roles } from './../../config/config-roles';
import useForm from './../../hooks/useForm';
import useMutation from './../../hooks/useMutation';
import { courseService } from './../../services/courseService';
import { formatCurrency } from './../../utils/format';
import FormOrder from './FormOrder';
import InfoOrder from './InfoOrder';
import PaymentOrder from './PaymentOrder';

const CoursesOrderPage = () => {
	const { profile, courseInfo, handleGetProfileCourse, handleGetProfilePayment } = useAuthContext();
	const { courseSlug } = useParams();
	const [orderLoading, setOrderLoading] = useState(false);
	const [paymentMethod, setPaymentMethod] = useState("");
	const navigate = useNavigate();
	// call api
	const { data: courseDetailData, execute: executeCourseDetail } = useMutation(
		courseService.getCourseBySlug
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

	// variant form field 
	const {
		firstName: profileName,
		email: profileEmail,
		phone: profilePhone,
		lastName: profileLName
	} = profile || {};

	// Handle profile form
	const { form, registerInput, validate, setForm } = useForm(
		{
			name: "",
			email: "",
			phone: "",
			type: "",
		},
		{
			name: [requireRule("Vui lòng nhập tên")],
			email: [
				requireRule("Vui lòng nhập email"),
				regrexRule("email", "Vui lòng nhập đúng định dạng email"),
			],
			phone: [
				requireRule("Vui lòng nhập phone"),
				regrexRule("phone", "Vui lòng nhập đúng định dạng phone"),
			],
			type: [requireRule("Vui lòng chọn hình thức học")],
		}
	);
	useEffect(() => {
		setForm({
			name: profileName + " " + profileLName,
			email: profileEmail,
			phone: profilePhone,
			type: "",
		});
	}, [profileName, profileEmail, profilePhone, profileLName]);


	const _onOrder = () => {
		const profileError = validate();

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
				orderService.orderCourse(payload, {
					onSuccess: async () => {
						setOrderLoading(true)
						message.success("Đăng ký thành công!");
						await handleGetProfileCourse();
						await handleGetProfilePayment();
						navigate(PATHS.PROFILE.MY_COURSE);
					},
					onFail: () => {
						setOrderLoading(true)
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
					<FormOrder registerInput={registerInput} types={tags} />
					<PaymentOrder handleChange={handlePaymentMethodChange} selectedPayment={paymentMethod} />


					{/* addclass --processing khi bấm đăng ký */}
					<Button
						onClick={_onOrder}

					>
						<span>Đăng ký khoá học</span>

					</Button>
				</div>
			</section>
		</main>

	)
}

export default CoursesOrderPage