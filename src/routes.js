import Home from "./pagesadmin/HomeAdmin";
import ProductEdit from "./pagesadmin/ProductEdit";
import NotFound from "./pagesadmin/NotFound";
import Product from "./pagesadmin/Product";
import BannerTop from "./pagesadmin/setting/BannerTop";


const routes = [
  { path: "", component: <Home /> },
  { path: "home", component: <Home /> },
  { path: "product", component: <Product /> },
  { path: "product/:id", component: <ProductEdit /> },
  { path: "not-found", component: <NotFound /> },
  { path: "*", component: <NotFound /> },
  {path:"bannerTop",component:<BannerTop/>}
];
export default routes;
