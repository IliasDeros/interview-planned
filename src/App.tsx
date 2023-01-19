import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navbar from './Navbar';
import Users from './users/Users';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable refetching because the APIs generate random data
      refetchOnWindowFocus: false,
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <div className="top-spacer"></div>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
