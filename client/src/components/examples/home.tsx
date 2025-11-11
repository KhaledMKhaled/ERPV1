import HomePage from '../../pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        // todo: remove mock functionality
        if (queryKey[0] === '/api/user/current') {
          return {
            id: "1",
            username: "mohammad",
            fullName: "Mohammed Mahyeddin",
            role: "Manager",
            points: 2450,
          };
        }
        throw new Error('Unknown query');
      },
    },
  },
});

export default function HomeExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-6 bg-background min-h-screen">
        <HomePage />
      </div>
    </QueryClientProvider>
  );
}
