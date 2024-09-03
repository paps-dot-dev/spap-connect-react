import React from 'react';

const AboutScreen = () => {
	return (
		<div className="mt-4 bg-white/20 p-4 rounded-md">
			<h1 className="text-2xl font-bold border-b-2 border-indigo-500">
				About Shawn.
			</h1>
			<p className="my-4 text-sm">
				I specialize in helping entrepreneurs drive growth by integrating more
				efficient, modern technologies into their tech stack.
			</p>
			<ul className="space-y-2">
				<li>⚛️ Web and Mobile Apps</li>
				<li>⚛️ Custom Websites</li>
				<li>⚛️ Technology Integrations (CMS, API’s, Databases)</li>
			</ul>
			<p className="my-4">
				With more infrastructure and integration choices than ever, it can be
				difficult to know what tools will be best to deliver a streamlined,
				scalable solution for your business. I’m a Full Stack Developer who has
				experience guiding businesses and delivering proven results. DM me and
				let’s discuss how I can help modernize your tech stack and drive growth.
			</p>
		</div>
	);
};

export default AboutScreen;
