import React from 'react';
import ProfileCircle from '../components/ProfileCircle';

const RootLayout = ({ children }) => {
	return (
		<div className="bg-gradient-to-b from-black to-slate-900 min-h-screen flex flex-col items-center p-5 ">
			<ProfileCircle />

			<main className="flex flex-col items-center text-white max-w-screen-2xl mx-auto p-5">
				{children}
			</main>
			<footer className="p-4 flex flex-col justify-center items-center py-10 gap-8">
				<a
					className="text-blue-500 text-center"
					href="mailto:spapineau@spaptechnology.com"
					target="_blank">
					Want a Website Like This? Tap Here.
				</a>
				<img className="w-24" src="/spap_logo_white.svg" />
			</footer>
		</div>
	);
};

export default RootLayout;
