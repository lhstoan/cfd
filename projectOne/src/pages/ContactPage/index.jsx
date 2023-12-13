import ContactForm from "./ContactForm"
import ContactSidebar from "./ContactSidebar"
import ContactTitle from "./ContactTitle"

const ContactPage = () => {
	const handleFormSubmit = (formData) => {
		console.log("formData", formData);
	};
	return (
		<main className="mainwrapper contact --ptop">
			<ContactTitle />
			<div className="contact__content">
				<div className="container">
					<div className="wrapper">
						<ContactSidebar />
						<ContactForm handleFormSubmit={handleFormSubmit} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default ContactPage