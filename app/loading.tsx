export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-muted">
          Loading...
        </h1>
      </div>
    </div>
  );
}
