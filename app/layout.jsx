import Link from 'next/link';
import './globals.css';
import { ThemeProvider } from '@/components/Theme-Provider';
export const metadata = {
  title: 'Pokemon',
  description: 'Pokemon Finder',
}
/**
 * Switching from dark to light need client interaction
 * Next js by default every component is a react server component
 * renders on the server,where these uses interactions not gonna work
 * client components also renders on the server but get hydrated on the client side
 * thus decreasing the client bundle size , this gonna rapidly increase application 
 * perfomance .
 * Since prvoiders like next thems gonna use context and some hooks
 * where they are not gonna work on the server side
 * So to use them in the server side we gonna import them in a provider component
 * that gonna contain these interactions etc
 * 
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <main className="flex min-h-screen flex-col items-center p-24">
              <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
                <Link href={'/'}><h2 className="text-2xl text-bold ">Pokemon Finder</h2></Link>
              </div> 
            {children}
        </main>
        </ThemeProvider>
        </body>
    </html>
  )
}
