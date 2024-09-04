import React from 'react';
import SocialsContainer from '../components/SocialsContainer';

const AboutScreen = () => {
	return (
		<div className="mt-4 bg-white/20 p-4 rounded-md">
			<h1 className="text-2xl font-bold border-b-2 border-indigo-500">
				About Shawn.
			</h1>

			<div className="bg-white text-black p-5 lg:p-10 mt-8 rounded-lg">
				<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
					<div className="flex justify-center my-5">
						<img
							className="w-3/4 lg:w-full object-cover rounded-md"
							src="/shawn_coding.jpeg"
						/>
					</div>
					<div className="lg:w-1/2 text-center mb-8">
						<p className="text-2xl font-semibold">Shawn Papineau</p>
						<p>Founder | SPAP Technology Solutions</p>
						<p className="text-sm mb-8">Full Stack Developer</p>
						<a
							href="https://linkedin.com/in/shawn-papineau"
							target="_blank"
							className="bg-indigo-600 p-4 rounded-md text-white hover:ring-2 hover:ring-indigo-600 hover:bg-transparent hover:text-indigo-600 duration-200 ease-linear">
							Connect With Me
						</a>
					</div>
				</div>
				<p className="my-4 lg:text-xl font-semibold">
					I specialize in helping entrepreneurs drive growth by integrating more
					efficient, modern technologies into their tech stack.
				</p>
				<ul className="space-y-2 text-sm lg:text-md">
					<li>⚛️ Web and Mobile Apps</li>
					<li>⚛️ Custom Websites</li>
					<li>⚛️ Technology Integrations (CMS, API’s, Databases)</li>
				</ul>
				<p className="my-4 text-sm lg:text-md">
					With more infrastructure and integration choices than ever, it can be
					difficult to know what tools will be best to deliver a streamlined,
					scalable solution for your business. <br /> <br /> I’m a Full Stack
					Developer who has experience guiding businesses and delivering proven
					results.
				</p>
				<p className="text-sm font-semibold mb-8">
					{' '}
					DM me and let’s discuss how I can help modernize your tech stack and
					drive growth.
				</p>
				<a
					href="https://linkedin.com/in/shawn-papineau"
					target="_blank"
					className="bg-indigo-600 p-4 rounded-md text-white hover:ring-2 hover:ring-indigo-600 hover:bg-transparent hover:text-indigo-600 duration-200 ease-linear block mx-auto text-center">
					Connect With Me
				</a>
			</div>
		</div>
	);
};

export default AboutScreen;
