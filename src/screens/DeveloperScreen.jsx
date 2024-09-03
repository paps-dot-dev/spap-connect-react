import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import { cases } from '../cases';

const DeveloperScreen = () => {
	return (
		<div className="mt-4 bg-white/20 p-4 rounded-md">
			<h1 className="text-2xl font-bold border-b-2 border-indigo-500">
				Developer Case Studies
			</h1>
			<div
				id="case-study-carousel"
				className="overflow-x-scroll flex gap-8 items-center mt-8">
				{cases.map((item, idx) => (
					<CaseStudyCard key={idx} project={item} />
				))}
				<CaseStudyCard
					project={{
						id: 1000,
						company: 'Want to See Your Project Here?',
						url: 'https://spaptechnology.com',
						company_logo_url: '',
						project_type: 'Contact Me!',
						project_tags: [],
						completion_date: '',
						description: '',
						thumbnails: {
							hero: '/spap_logo_white.svg',
						},
					}}
				/>
			</div>
		</div>
	);
};

export default DeveloperScreen;
