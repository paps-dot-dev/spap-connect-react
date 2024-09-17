import React from 'react';
import { useEffect } from 'react';

const ContactForm = () => {
	useEffect(() => {
		// Create script element and configure it
		const script = document.createElement('script');
		script.async = true;
		script.src = 'https://cdn.sender.net/accounts_resources/universal.js';

		// Function to initialize Sender after the script is loaded
		script.onload = () => {
			window.sender =
				window.sender ||
				function () {
					(window.sender.q = window.sender.q || []).push(arguments);
				};
			window.sender('299654a2399851'); // The Sender account key
		};

		// Append the script to the body
		document.body.appendChild(script);

		// Cleanup the script if component unmounts
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div
			className="sender-form-field mt-8"
			data-sender-form-id="m16j0y1degjj7jjqo9i"></div>
	);
};

export default ContactForm;
