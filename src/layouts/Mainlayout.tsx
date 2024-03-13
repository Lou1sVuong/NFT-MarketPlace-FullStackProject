import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
