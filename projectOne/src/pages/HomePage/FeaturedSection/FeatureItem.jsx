import React from 'react'

const FeatureItem=({...restProps}) => {
	return (
		<div className="featured__content-item">
			<h3 className="title --t3 --white">Đồng hành và hỗ trợ 24/7</h3>
			<p>
				Giảng viên, mentor và học viên là một team gắn kết, cùng nhau hỗ trợ, kết nối và giúp đỡ lẫn
				nhau trong suốt quá trình
				học và phát triển sự nghiệp.
			</p>
		</div>
	)
}

export default FeatureItem