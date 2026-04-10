import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PrototypeForm } from './components/PrototypeForm';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="app">
        <PrototypeForm />
      </main>
    </QueryClientProvider>
  );
}

export default App;
