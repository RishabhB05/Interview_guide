import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { dark } from '@clerk/themes'







const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "AI career coach",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
<ClerkProvider appearance={{
  baseTheme: dark,
}}>

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
        >
      
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
           {/* {header} */}
           <Header  />


            {/* Main content */}

           {/* <main className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
           </main> */}

      {/* <main className="relative w-full h-full min-h-screen">
       <div className="main-grid-bg" />
       <div className="relative z-10">
       
        {children}
        </div>
      </main> */}
      <main className="relative w-full h-full min-h-screen">
  <div className="main-grid-bg">
    <div className="main-grid-bg__grid"></div>
    <div className="main-grid-bg__circle"></div>
  </div>
  <div className="relative z-10">
   {children}
  </div>
</main>


           {/* {footer} */}
           <footer className="bg-muted/50 py-8 sm:py-10 lg:py-12">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-200 text-sm sm:text-base">
               THIS IS THE FOOTER
             </div>
           </footer>

          </ThemeProvider> 
      </body>
    </html>

  </ClerkProvider>      
  );
}
