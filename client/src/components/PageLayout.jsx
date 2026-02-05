import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({
  children,
  title,
  subtitle,
  heroImage,
  testId,
}) {
  return (
    <div data-testid={testId} className="min-h-screen bg-background text-foreground">
      <Navbar />
      {title ? (
        <header className="relative">
          <div className="absolute inset-0">
            {heroImage ? (
              <img
                src={heroImage}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full bg-secondary" />
            )}
            <div className="absolute inset-0 bg-black/45" />
          </div>
          <div className="relative">
            <div className="container-pad py-16 sm:py-20">
              <h1
                data-testid="text-page-title"
                className="text-4xl sm:text-5xl font-semibold serif text-white leading-tight"
              >
                {title}
              </h1>
              {subtitle ? (
                <p
                  data-testid="text-page-subtitle"
                  className="mt-3 max-w-2xl text-base sm:text-lg text-white/85"
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
          </div>
        </header>
      ) : null}

      <main>{children}</main>
      <Footer />
    </div>
  );
}
