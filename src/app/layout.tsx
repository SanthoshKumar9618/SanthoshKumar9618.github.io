import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'T Santhosh Kumar | Software Engineer | Python Backend Developer',
  description: 'Software Engineer specializing in Python, FastAPI, backend engineering, full-stack development, real-time systems, RAG, and AI-powered applications.',
  keywords: [
    'Software Engineer',
    'Backend Developer',
    'Python Developer',
    'Python Full Stack Developer',
    'FastAPI Developer',
    'AI Engineer',
    'GenAI',
    'RAG',
    'LLM',
    'React',
    'PostgreSQL',
    'Redis'
  ],
  authors: [{ name: 'T Santhosh Kumar' }],
  creator: 'T Santhosh Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tsanthoshdev.com',
    title: 'T Santhosh Kumar | Software Engineer | Python Backend Developer',
    description: 'Software Engineer specializing in Python, FastAPI, backend engineering, full-stack development, real-time systems, RAG, and AI-powered applications.',
    siteName: 'T Santhosh Kumar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T Santhosh Kumar | Software Engineer | Python Backend Developer',
    description: 'Software Engineer specializing in Python, FastAPI, backend engineering, full-stack development, real-time systems, RAG, and AI-powered applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#080B10] text-[#F1F5F9] antialiased selection:bg-cyan selection:text-[#080B10]">
        {children}
      </body>
    </html>
  );
}
