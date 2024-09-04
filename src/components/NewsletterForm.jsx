import React from 'react';
import { useState, useEffect, useRef } from 'react';

const NewsletterForm = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const iframeRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (iframeRef.current) {
			iframeRef.current.style.width = `${screenWidth / 1.2}px`;
		}
	}, []);
	return (
		<section className="mt-8 text-xl font-semibold mx-8">
			<iframe
				className="rounded-xl m-0 bg-transparent lg:h-96 h-64 "
				ref={iframeRef}
				src="https://embeds.beehiiv.com/9c5c31bb-b0c2-48c0-a263-285a6f785911"
				data-test-id="beehiiv-embed"
				width={screenWidth}
				frameborder="0"></iframe>
		</section>
	);
};

export default NewsletterForm;
