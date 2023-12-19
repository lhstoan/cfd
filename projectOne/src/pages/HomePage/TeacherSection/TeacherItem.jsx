const TeacherItem=({image,jobTitle,name,...restProps}) => {
	return (
		<div className="teacher__list-item">
			<div className="img">
				<img src={image} alt={name} />
			</div>
			<div className="info">
				<p className="label">{jobTitle}</p>
				<h3 className="title --t3">{name}</h3>
			</div>
		</div>
	)
}

export default TeacherItem