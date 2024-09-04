import { useState } from 'react';

import RootLayout from './layout/RootLayout';
import ProfileCircle from './components/ProfileCircle';
import SocialsContainer from './components/SocialsContainer';
import TabSelectorContainer from './components/TabSelectorContainer';
import NewsletterForm from './components/NewsletterForm';
import { FaCaretDown } from 'react-icons/fa';
import { FaCircleArrowDown, FaCircleArrowUp } from 'react-icons/fa6';

function App() {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<RootLayout>
			<img
				className="w-24 ml-auto m-4 p-1 opacity-50"
				src="/spap_logo_white.svg"
			/>
			<ProfileCircle />
			<SocialsContainer />
			<NewsletterForm />
			{isExpanded ? (
				<>
					<button
						onClick={() => setIsExpanded(false)}
						className=" text-5xl  mt-8 hover:text-blue-500 duration-200 ease-linear ml-auto">
						<FaCircleArrowUp />
					</button>
					<p className="ml-auto text-sm text-center mt-1">See Less</p>
				</>
			) : (
				<>
					<button
						onClick={() => setIsExpanded(true)}
						className="text-5xl hover:text-blue-500 duration-200 ease-linear mt-8">
						<FaCircleArrowDown />
					</button>
					<p className="text-sm text-center mt-2 animate-bounce">See More</p>
				</>
			)}
			{isExpanded && (
				<section className="mt-16 mx-auto">
					<TabSelectorContainer />
				</section>
			)}
		</RootLayout>
	);
}

export default App;
