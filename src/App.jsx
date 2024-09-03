import RootLayout from './layout/RootLayout';
import ProfileCircle from './components/ProfileCircle';
import SocialsContainer from './components/SocialsContainer';
import TabSelectorContainer from './components/TabSelectorContainer';

function App() {
	return (
		<RootLayout>
			<img
				className="w-24 ml-auto m-4 p-1 opacity-50"
				src="/spap_logo_white.svg"
			/>
			<ProfileCircle />
			<SocialsContainer />
			<section className="mt-8 p-2 text-xl font-semibold mx-4">
				<p>Subscribe to My Newsletter!</p>
				<iframe
					src="https://embeds.beehiiv.com/ad31a6a5-6362-488a-a30a-bd035dfb2d2b?slim=true"
					data-test-id="beehiiv-embed"
					height="52"
					className="w-screen "
					frameborder="0"></iframe>
			</section>
			<section className="mt-16">
				<TabSelectorContainer />
			</section>
		</RootLayout>
	);
}

export default App;
