import React from 'react';
import SocialButton from '../components/SocialButton';
import ContactForm from '../components/ContactForm';

const ContactScreen = () => {
	return (
		<div className="mt-4  p-4 rounded-md">
			<h1 className="text-2xl font-bold border-b-2 border-indigo-500">
				Let's Connect.
			</h1>
			<div className="flex items-center mt-4">
				<SocialButton
					socials={{
						thumbnail: 'https://svgl.app/library/calendly.svg',
						url: 'https://calendly.com/spap-technology/free-consultation',
					}}
				/>
				<SocialButton
					socials={{
						thumbnail: 'https://svgl.app/library/linkedin.svg',
						url: 'https://linkedin.com/in/shawn-papineau',
					}}
				/>
				<SocialButton
					socials={{
						thumbnail: 'https://svgl.app/library/gmail.svg',
						url: 'mailto:spapineau@spaptechnology.com',
					}}
				/>
			</div>
			<ContactForm />
		</div>
	);
};

export default ContactScreen;
