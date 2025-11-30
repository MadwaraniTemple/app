import React from 'react';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './components/Layout/Body';

function App() {
  // RouterProvider is mounted high so all components using TanStack hooks are inside it.
  return (
    <RouterProvider router={router} />
  );
}

export default App;
