import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const showHeader =
      router.pathname !== "/login" && router.pathname !== "/register";

   return (
      <>
         <Head>
            <title>Time Bank</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         {showHeader && <Header />}
         <div className="flex min-h-screen gap-4">
            {showHeader && <Navigation />}
            <div className="flex flex-col flex-1">
               <Component {...pageProps} />
            </div>
         </div>
      </>
   );
}

export default MyApp;
