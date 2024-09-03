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
			<p>Subscribe to My Newsletter!</p>
			<iframe
				ref={iframeRef}
				src="https://embeds.beehiiv.com/ad31a6a5-6362-488a-a30a-bd035dfb2d2b?slim=true"
				data-test-id="beehiiv-embed"
				frameborder="0"
				height="52"
				style={{ width: `${screenWidth / 1.2}px` }}></iframe>
		</section>
	);
};

export default NewsletterForm;
