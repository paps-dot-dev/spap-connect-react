import React, { useState } from 'react';

const CaseStudyCard = ({ project }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div
			className={
				isExpanded
					? ' rounded-xl min-w-full'
					: 'h-[500px] rounded-xl min-w-[320px] max-w-[320px]'
			}
			style={{
				backgroundImage: `url(${project.thumbnails.hero})`,
				backgroundSize: 'cover',
			}}>
			<div className="h-full w-full bg-black/80 text-white rounded-xl z-10 flex flex-col justify-end items-start px-2 py-4">
				<div className="flex justify-between items-center mb-auto w-full mt-2">
					<p className="text-2xl">{project.completion_date}</p>
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="btn bg-indigo-600 text-white px-8">
						{isExpanded ? 'Read Less' : 'Read More'}
					</button>
				</div>
				{isExpanded && (
					<div className="lg:my-20 lg:p-16 lg:mx-20 text-sm w-full lg:w-fit p-10 my-10 lg:text-lg bg-indigo-600/80 rounded-md">
						<a
							href={project.url}
							target="_blank"
							className="btn bg-black text-white border-none">
							Visit Website
						</a>
						<p className="text-2xl lg:text-5xl font-semibold py-2 border-b-2 border-white mb-4">
							{project.company}
						</p>
						<p>{project.description}</p>
						<div className="flex flex-wrap justify-end items-center gap-2 mt-4">
							{project.project_tags.map((tag) => (
								<p className="badge text-white p-4 bg-slate-950">{tag}</p>
							))}
						</div>
					</div>
				)}
				<p className="shadow-sm text-4xl font-semibold">{project.company}</p>
				<p className="text-md font-extralight">{project.project_type}</p>
			</div>
		</div>
	);
};

export default CaseStudyCard;
