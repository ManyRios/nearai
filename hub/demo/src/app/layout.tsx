import '~/styles/globals.scss';
import '@near-pagoda/ui/styles.css';
import '@near-wallet-selector/modal-ui/styles.css';

import { type Metadata } from 'next';
import { type ReactNode } from 'react';

import { Layout } from '~/components/Layout';
import { env } from '~/env';

const title = env.NEXT_PUBLIC_CONSUMER_MODE
  ? 'AI Assistant'
  : 'AI Research Hub';

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title,
  },
};

/*
  The suppressHydrationWarning on <html> is required by <ThemeProvider>:
  https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
*/

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content={`NEAR ${title}`} />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
