import React from 'react';
import { motion } from 'motion/react';

const InteractionButton = ({ handleClick, thumbnailUrl, buttonText }) => {
	return (
		<motion.button
			initial={{ translateX: -100 }}
			animate={{ translateX: 0 }}
			onClick={() => handleClick()}
			className="flex items-center bg-white/10 shadow-md shadow-purple-500 p-5 w-[300px] gap-5">
			<div className="max-w-16">
				<img className="w-full object-cover rounded-md" src={thumbnailUrl} />
			</div>
			<p className=" text-nowrap font-semibold">{buttonText}</p>
		</motion.button>
	);
};

export default InteractionButton;
