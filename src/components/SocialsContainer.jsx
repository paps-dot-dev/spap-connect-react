import React from 'react';
import SocialButton from './SocialButton';

import { socials } from '../socials';

const SocialsContainer = () => {
	return (
		<div className="flex justify-between items-center">
			{socials.map((social) => (
				<SocialButton key={social.id} socials={social} />
			))}
		</div>
	);
};

export default SocialsContainer;
