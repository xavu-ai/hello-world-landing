import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A simple Hello World landing page',
};

export default function HelloWorldPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-500`}
        >
          Hello, World!
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          Welcome to your new landing page
        </p>
      </div>
    </main>
  );
}
