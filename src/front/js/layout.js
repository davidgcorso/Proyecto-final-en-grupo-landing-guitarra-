import React from "react";
import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
} from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Contacto } from "./pages/Contacto.jsx";
import { Producto } from "./pages/producto";
import { Comparar } from "./pages/comparar";
import { EditPostAdm } from "./component/Admin/EditPostAdm.jsx";
import { UploadAdm } from "./component/Admin/UploadAdm.jsx";
import { UsersViewAdm } from "./component/Admin/UsersViewAdm.jsx";
import { PanelDeControlAdm } from "./component/Admin/PanelDeControlAdm.jsx";
import { ContactViewAdm } from "./component/Admin/ContactViewAdm.jsx";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CarroDeCompras } from "./pages/carroDeCompras.js";
import { CarroDeComprasVacio } from "./component/carroDeCompras/vistaCarroVacio.jsx";
import { FormularioDePago } from "./component/carroDeCompras/formularioDePago.jsx";
import { ErrorDePago } from "./component/carroDeCompras/errorDePago.jsx";
import { Page_login } from "./pages/login";
import { Page_register } from "./pages/register";
import { Page_forgot_password } from "./pages/forgot_password";
//create your first component
const ProductDetail = () => {
  const { product } = useParams();

  useEffect(() => {}, []);

  return (
    <div className="card ">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://picsum.photos/id/237/200/300"
            className="card-img-top"
          />
        </div>
        <div className="col-md-8">
          <h5 className="card-title">{product} </h5>
          <p className="card-text">{product}</p>
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Producto">
              <Producto />
            </Route>
            <Route exact path="/producto/:product">
              <ProductDetail />
            </Route>
            <Route exact path="/Comparar">
              <Comparar />
            </Route>
            <Route exact path="/contacto">
              <Contacto />
            </Route>
            <Route exact path="/login">
              <Page_login />
            </Route>
            <Route exact path="/register">
              <Page_register />
            </Route>
            <Route exact path="/forgot_password">
              <Page_forgot_password />
            </Route>
            <Route path="/carroDeCompras">
              <CarroDeCompras />
            </Route>
            <Route path="/carroDeComprasVacio">
              <CarroDeComprasVacio />
            </Route>
            <Route path="/errorDePago">
              <ErrorDePago />
            </Route>
            <Route path="/adminprueba">
              <PanelDeControlAdm />
            </Route>
            <Route path="/upload">
              <UploadAdm />
            </Route>
            <Route path="/editpost">
              <EditPostAdm />
            </Route>
            <Route path="/usersview">
              <UsersViewAdm />
            </Route>
            <Route path="/contactadmin">
              <ContactViewAdm />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
