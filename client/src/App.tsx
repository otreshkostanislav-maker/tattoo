import { Switch, Route } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./context/LanguageContext";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppContent() {
  return (
    <>
      <LanguageSwitcher />
      <Router />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Toaster />
        <AppContent />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;