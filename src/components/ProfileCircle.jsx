import React from 'react';

const ProfileCircle = () => {
	return (
		<div className="mt-4 flex flex-col items-center">
			<div
				className="w-36 h-36 rounded-full border-2 border-indigo-500 flex flex-col justify-center items-center"
				id="profile-pic">
				<img
					className="w-full h-full object-cover rounded-full"
					src="/headshot.jpeg"
				/>
			</div>
			<div id="text-container">
				<p className="text-xl font-bold text-center">Shawn Papineau</p>
				<div className="flex justify-center items-center w-full gap-2 font-light">
					<p>Founder</p>
					<p>|</p>
					<p>SPAP Technology Solutions</p>
				</div>
			</div>
		</div>
	);
};

export default ProfileCircle;
