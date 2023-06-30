import Footer from "~/components/Footer";
import Header from "~/components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
