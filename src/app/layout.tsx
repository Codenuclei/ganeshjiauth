// layout.tsx

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Next App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
