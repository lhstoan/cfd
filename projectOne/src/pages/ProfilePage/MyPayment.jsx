
import React from 'react';
import { PAYMENTS } from '../../config/config-general';
import { useAuthContext } from '../../context/AuthContext';
import { formatCurrency, formatDate } from '../../utils/format';

const MyPayment = () => {
	const { paymentInfo } = useAuthContext();
	return (
		<div className="tab__content-item" style={{ display: 'block' }}>
			{!!!paymentInfo.length && <p>Không có dữ liệu.</p>}
			{paymentInfo?.length > 0 &&
				paymentInfo
					.map((payment, index) => {
						return <PaymentItem key={payment?.id || index} payment={payment} />
					})
			}
		</div >
	)
}

export default MyPayment


const PaymentItem = ({ payment }) => {
	const {
		course,
		paymentMethod, createdAt
	} = payment || "";
	const dateOrder = formatDate(createdAt || "");
	const labelPayment = PAYMENTS.find((item) => item.id === paymentMethod)?.label;


	return (
		<div className="itemhistory">
			<div className="name">{course.name || ""}</div>
			<div className="payment">{labelPayment || ""}</div>
			<div className="date">{dateOrder}</div>
			<div className="money">{formatCurrency(course.price)} VND</div>
		</div>
	)

}