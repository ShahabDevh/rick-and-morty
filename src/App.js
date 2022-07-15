import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import CharacterInfo from './pages/characterInfo';
import Characters from './pages/characters';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Characters />} />
					<Route path="/character/:id" element={<CharacterInfo />} />
				</Routes>
			</BrowserRouter>
			{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
		</QueryClientProvider>
	);
}

export default App;
