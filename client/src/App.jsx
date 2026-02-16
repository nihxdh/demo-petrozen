import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Industries from "@/pages/industries";
import Certifications from "@/pages/certifications";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

import AdminLogin from "@/pages/admin/login";
import AdminCategories from "@/pages/admin/categories";
import AdminSubCategories from "@/pages/admin/subcategories";
import AdminProducts from "@/pages/admin/products";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/industries" component={Industries} />
      <Route path="/certifications" component={Certifications} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/categories" component={AdminCategories} />
      <Route path="/admin/subcategories" component={AdminSubCategories} />
      <Route path="/admin/products" component={AdminProducts} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
