import React from 'react';

const RootLayout = ({ children }) => {
	return (
		<div className="bg-gradient-to-b from-black to-slate-900 min-h-screen ">
			<main className="flex flex-col items-center text-white max-w-screen-2xl mx-auto">
				{children}
			</main>
			<footer></footer>
		</div>
	);
};

export default RootLayout;
