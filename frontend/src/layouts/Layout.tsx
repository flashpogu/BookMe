import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import Hero from "../componenets/Hero";
import SearchBar from "../componenets/SearchBar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto">
        <SearchBar />
      </div>
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
