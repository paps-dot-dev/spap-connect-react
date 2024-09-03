import React from 'react';

const TabSelector = ({ changeScreen, activeScreen }) => {
	const handleClick = (e) => {
		changeScreen(e.target.value);
	};
	return (
		<div
			role="tablist"
			className="tabs tabs-boxed w-full max-w-screen-2xl p-2 tabs-md">
			<button
				value={'Developer'}
				onClick={handleClick}
				role="tab"
				className={activeScreen == 'Developer' ? `tab tab-active` : 'tab'}>
				Developer
			</button>
			<button
				value={'Contact'}
				onClick={handleClick}
				role="tab"
				className={activeScreen == 'Contact' ? `tab tab-active` : 'tab'}>
				Contact
			</button>
			<button
				value={'About'}
				onClick={handleClick}
				role="tab"
				className={activeScreen == 'About' ? `tab tab-active` : 'tab'}>
				About
			</button>
		</div>
	);
};

export default TabSelector;
