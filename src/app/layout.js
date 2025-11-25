
import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'
import { DialogProvider } from './context/DialogContext';

export const metadata = {
  title: "IQ Property Group",
  description: "Headless Wordpress",
};


import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-montserrat',
});


export default function RootLayout({ children }) {

  return (
    <html lang="ru">
      <body className={`${montserrat.variable}`}>
        <DialogProvider>
            <Header />
            {children}
            <Footer />
        </DialogProvider>
      </body>
    </html>
  );
}