import RootContainer from "./RootContainer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <RootContainer />
        </QueryClientProvider>
    )
}

export default App;