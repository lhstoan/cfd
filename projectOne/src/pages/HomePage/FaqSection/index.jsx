import React from 'react'
import FaqItem from './FaqItem';

const FaqSection=({data=[],loading=false}) => {
	const modifiedQuestions=
		data?.map((item) => {
			const {id,question,answer}=item||{};
			return {
				id,
				title: question,
				content: answer,
			};
		})||[];
	const commonQuestions=modifiedQuestions.slice(0,6);
	const otherQuestions=modifiedQuestions.slice(6);


	return (
		<section className="faq --scpadding">
			<div className="container">
				<div className="faq__inner">
					<div className="heading --noline --center">
						<h2 className="heading__title title --t2">Câu hỏi <span className="color--primary">thường gặp</span></h2>
					</div>
					<div className="faq__list">
						{!loading&&(
							<>
								<FaqItem label='THÔNG TIN CHUNG' data={commonQuestions} />
								<FaqItem label='ĐĂNG KÝ, THANH TOÁN' data={otherQuestions} />
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default FaqSection