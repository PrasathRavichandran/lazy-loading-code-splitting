import React, { Suspense, lazy } from 'react';

import { Header } from './components';

const MovieLists = lazy(() => import('./components/MovieList/MovieList'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <div className="loader">
          <h1>Loading Movies....</h1>
        </div>
      }>
        <MovieLists />
      </Suspense>
    </>
  );
}

export default App;
