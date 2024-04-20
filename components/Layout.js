/**
 * External dependencies
 */
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Internal dependencies
 */
import Header from './Header';
import Footer from './Footer';

export default ({ children, title }) => (
	<>
		<Head>
			<title>{title ? title + ' - eleganté' : 'eleganté'}</title>
		</Head>

		<ToastContainer
			position="bottom-left"
			limit={3}
			autoClose={2000}
			pauseOnFocusLoss={false}
			theme={'dark'}
		/>

		<Header />

		<main className="max-w-container min-h-[60vh]">{children}</main>

		<Footer />
	</>
);
