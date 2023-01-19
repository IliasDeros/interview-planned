import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Users from './Users';

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
      <Users />
    </QueryClientProvider>
  );
}

export default App;
