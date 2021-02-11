import Router from 'Components/Router';
import GlobalStyles from './GlobalStyles';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <GlobalStyles />
      <Router />
    </HelmetProvider>
  );
}

export default App;
