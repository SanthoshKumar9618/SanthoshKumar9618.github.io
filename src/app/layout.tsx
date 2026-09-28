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
    'Redis',
  ],
  authors: [{ name: 'T Santhosh Kumar' }],
  creator: 'T Santhosh Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://santhoshkumar9618.github.io',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Theme init: LIGHT is always default. Dark only if user explicitly set it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
