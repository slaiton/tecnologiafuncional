import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { applyHead, getPageMeta } from "../../seo/seo";
import { scrollToId } from "../../utils/scroll";

const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    applyHead(getPageMeta(pathname));
  }, [pathname]);

  useEffect(() => {
    // El efecto corre con la página nueva ya montada, así que la sección existe
    if (hash) {
      scrollToId(hash.slice(1));
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return (
    <div className="app">
      <Header />

      <main className="sections">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
