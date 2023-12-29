import React from 'react';
import { PAYMENTS } from '../../config/config-general';

const PaymentOrder = ({ handleChange, selectedPayment }) => {
	const _onChange = (e) => {
		handleChange?.(e.target?.value);
	};
	return (
		<div className="itemorder paymentorder">
			<h3 className="title --t3">Hình thức thanh toán</h3>
			<div className="boxorder">
				{PAYMENTS.map((payment) => {
					const { id, icon, label, description } = payment || {};
					return (
						<div className="boxorder__pay" key={id}>
							<label className="radiocontainer">
								<img src={icon} alt={label} />
								{label}
								<input
									type="radio"
									name="radio"
									value={id}
									onChange={_onChange}
								/>
								<span className="checkmark" />
							</label>
							<div
								className="boxorder__pay-tooltip"
								style={{
									display: selectedPayment === id ? "block" : "none",
								}}
							>
								{description}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	)
}

export default PaymentOrder