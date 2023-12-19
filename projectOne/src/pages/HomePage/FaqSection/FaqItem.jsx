import {Empty} from 'antd'
import React,{useState} from 'react'

const FaqItem=({label="",data=[],defaultActiveIndex=-1}) => {
	const [activeIndex,setActiveIndex]=useState(defaultActiveIndex);
	return (
		<div className="accordion">
			{label&&<h3 className="accordion__title label">{label}</h3>}
			{!data?.length>0? (
				<Empty description="Nothing!!" />
			):(
				data?.map((faq,index) => {
					const {id,title,content}=faq||{};
					return (
						<div className={`accordion__content ${activeIndex===index? "active":""}`} key={id||index}>
							<div className="accordion__content-title" onClick={() => setActiveIndex(index===activeIndex? -1:index)}>
								<h4><strong>{title||""}</strong></h4>
							</div>
							<div className="accordion__content-text">
								{content||""}
							</div>
						</div>
					)
				}
				)
			)}
		</div>
	)
}

export default FaqItem