import RootLayout from './layout/RootLayout';
import ProfileCircle from './components/ProfileCircle';
import SocialsContainer from './components/SocialsContainer';
import TabSelectorContainer from './components/TabSelectorContainer';
import NewsletterForm from './components/NewsletterForm';

function App() {
	return (
		<RootLayout>
			<img
				className="w-24 ml-auto m-4 p-1 opacity-50"
				src="/spap_logo_white.svg"
			/>
			<ProfileCircle />
			<SocialsContainer />
			<NewsletterForm />

			<section className="mt-16">
				<TabSelectorContainer />
			</section>
		</RootLayout>
	);
}

export default App;
