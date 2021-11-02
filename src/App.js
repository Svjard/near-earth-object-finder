import React from 'react';
import { Router } from 'react-router-dom';
import browserHistory from './browserHistory';
import ErrorBoundary from './ErrorBoundary';
import GlobalStyles from './GlobalStyles';
import { Provider as StateContext } from './state';

import Navbar from './components/Navbar';
import SearchForm from './containers/SearchForm';
import ResultsTable from './containers/ResultsTable';

function App() {
  return (
    <Router history={browserHistory}>
      <StateContext>
        <GlobalStyles />
        <ErrorBoundary>
          <Navbar />
          <div>
            <SearchForm/>
            <ResultsTable/>
          </div>
        </ErrorBoundary>
      </StateContext>
    </Router>
  );
}

export default App;
