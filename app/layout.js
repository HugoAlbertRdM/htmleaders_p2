import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Searcher from "@/components/Searcher";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="custom-body">
        <div className="main-container">
          <Header></Header>
          <main >
            <Searcher></Searcher>
            {children}
          </main> {/* Contenido dinámico */}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
