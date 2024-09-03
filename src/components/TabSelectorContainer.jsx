import React, { useState } from 'react';
import TabSelector from './TabSelector';
import DeveloperScreen from '../screens/DeveloperScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

const TabSelectorContainer = () => {
	const [activeScreen, setActiveScreen] = useState('Developer');

	const changeScreen = (screen) => {
		setActiveScreen(screen);
	};

	const screens = {
		Developer: <DeveloperScreen />,
		About: <AboutScreen />,
		Contact: <ContactScreen />,
	};

	return (
		<div className="w-screen max-w-screen-2xl">
			<TabSelector activeScreen={activeScreen} changeScreen={changeScreen} />
			{screens[activeScreen]}
		</div>
	);
};

export default TabSelectorContainer;
