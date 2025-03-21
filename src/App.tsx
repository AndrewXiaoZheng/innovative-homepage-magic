import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 处理 GitHub Pages 路由
const GitHubPagesRedirect = () => {
  useEffect(() => {
    // 检查是否有存储的重定向路径
    const redirectPath = localStorage.getItem('redirect_path');
    if (redirectPath) {
      localStorage.removeItem('redirect_path');
      window.history.replaceState(null, '', redirectPath);
    }
    
    // 检查 URL 参数中是否有路径信息
    const query = new URLSearchParams(window.location.search);
    const path = query.get('p');
    if (path) {
      window.history.replaceState(null, '', path);
    }
  }, []);
  
  return null;
};

// 修改为使用HashRouter而不是BrowserRouter
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GitHubPagesRedirect />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
