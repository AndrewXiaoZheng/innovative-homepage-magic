
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <FadeIn>
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
            Page not found
          </h2>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="mt-4 text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="mt-10">
            <Link to="/">
              <Button size="lg" className="rounded-full px-8">
                Back to Home
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotFound;
