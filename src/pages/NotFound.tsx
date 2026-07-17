import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <section className="min-h-[calc(100dvh-4rem)] flex items-center justify-center circuit-pattern">
        <div className="text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 text-destructive text-sm font-mono bg-destructive/5 mb-6">
            <TriangleAlert className="w-4 h-4" />
            HardFault_Handler()
          </div>
          <h1 className="text-7xl md:text-8xl font-bold font-mono mb-4">
            <span className="text-gradient">404</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2 font-mono">
            Segmentation fault (core dumped)
          </p>
          <p className="text-muted-foreground mb-8">
            The page <code className="text-primary">{location.pathname}</code> doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Reset to Home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
