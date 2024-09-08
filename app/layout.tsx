// "use client";

// import { Inter } from "next/font/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { Toaster } from "react-hot-toast";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const queryClient = new QueryClient();

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body suppressHydrationWarning={true} className={inter.className}>
//         <QueryClientProvider client={queryClient}>
//           <GoogleOAuthProvider clientId="703576097619-j4ceo8d829thp1tfedfnun45cmce6huu.apps.googleusercontent.com">
//             {children}
//             <Toaster />
//             <ReactQueryDevtools />
//           </GoogleOAuthProvider>
//         </QueryClientProvider>
//       </body>
//     </html>
//   );
// }

// layout.tsx (Server Component)

import { Inter } from "next/font/google";
import ClientProviders from "@/components/ClientProviders/ClientProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
