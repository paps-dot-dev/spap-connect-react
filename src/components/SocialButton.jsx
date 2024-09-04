import React from 'react';

const SocialButton = ({ socials }) => {
	return (
		<a
			className="w-12 h-12 mx-2 mt-6 rounded-full p-4 bg-white/20 flex items-center focus:bg-white/50 hover:bg-white/50 hover:scale-110 duration-200 ease-in-out"
			href={socials.url}
			target="_blank">
			<img className="w-full h-16" src={socials.thumbnail} />
		</a>
	);
};

export default SocialButton;
