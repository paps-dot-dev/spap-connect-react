import { useState } from 'react';

import RootLayout from './layout/RootLayout';
import LinkButton from './components/LinkButton';

function App() {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<RootLayout>
			<LinkButton
				buttonText={'Subscribe to my Newsletter'}
				thumbnailUrl={
					'https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/branding/logos/RiffsCodeCoffee.png'
				}
				linkUrl={'#'}
			/>

			{/*<img*/}
			{/*	className="w-24 ml-auto m-4 p-1 opacity-50"*/}
			{/*	src="/spap_logo_white.svg"*/}
			{/*/>*/}
			{/*<ProfileCircle />*/}
			{/*<SocialsContainer />*/}
			{/*<NewsletterForm />*/}
			{/*{isExpanded ? (*/}
			{/*	<>*/}
			{/*		<button*/}
			{/*			onClick={() => setIsExpanded(false)}*/}
			{/*			className=" text-5xl  mt-8 hover:text-blue-500 duration-200 ease-linear ml-auto">*/}
			{/*			<FaCircleArrowUp />*/}
			{/*		</button>*/}
			{/*		<p className="ml-auto text-sm text-center mt-1">See Less</p>*/}
			{/*	</>*/}
			{/*) : (*/}
			{/*	<>*/}
			{/*		<button*/}
			{/*			onClick={() => setIsExpanded(true)}*/}
			{/*			className="text-5xl hover:text-blue-500 duration-200 ease-linear mt-8">*/}
			{/*			<FaCircleArrowDown />*/}
			{/*		</button>*/}
			{/*		<p className="text-sm text-center mt-2 animate-bounce">See More</p>*/}
			{/*	</>*/}
			{/*)}*/}
			{/*{isExpanded && (*/}
			{/*	<section className="mt-16 mx-auto">*/}
			{/*		<TabSelectorContainer />*/}
			{/*	</section>*/}
			{/*)}*/}
		</RootLayout>
	);
}

export default App;
