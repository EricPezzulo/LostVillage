import Footer from "~/components/Footer";
import Header from "~/components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen sm:min-h-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
