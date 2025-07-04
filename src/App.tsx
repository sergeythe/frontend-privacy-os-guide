import { Route, Routes } from "react-router";
import ArticlePage from "@/pages/ArticlePage";
import NotFound from "@/pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";
import { AsideTest } from "@/components/AsideTest";
import { Header } from "@/components/Header";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const queryClient = new QueryClient();

function App() {
  return (
    <div
      className="min-h-screen w-screen bg-sky-600 flex flex-col place-content-stretch
     selection:text-green-500 selection:bg-black"
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Header />
          <div className="flex justify-between">
            <AsideTest />
            <main className="container mx-auto bg-sky-200 border-b-6 border-sky-300 my-6 p-6 shadow">
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route index path="/" element={<HomePage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/articles/:slug" element={<ArticlePage />} />
              </Routes>
            </main>
          </div>
        </Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
