import React, { useEffect, useState, useContext } from "react";
import "../../styles/img.css";
import { useParams } from "react-router-dom";
import Slider from "../component/Vista_principal/Slider";
import { Context } from "../store/appContext";

export const ProductDetail = () => {
  const { product } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => { }, []);
  const [lista, setlista] = useState([]);
  const urlApi = "https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us47.gitpod.io/api/products/id/" + product
  useEffect(() => {
    getTask(urlApi);
  }, []);
  const getTask = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        // console.log(data);
        setlista(data);
      })
      .catch((error) => console.log(error));
  };

  const addTolocalStorage = (infoProducto) => {
    localStorage.setItem("product", JSON.stringify(infoProducto))
    console.log("producto añadido al localStorage")
  }

  const addButtonFunctions = () => {
    addTolocalStorage(lista)
    // actions.addToCart(lista)

  }
  return (
    <div key={lista.id}>
      <nav className="navbar bg-secondary fixed-top m-5 ">
        <div className="container-fluid d-flex justify-content-end">
          <button className="navbar-brand border-none" href={"/carroDeCompras/" + lista.id} onClick={() => addButtonFunctions()} >Añadir al carrito</button>

        </div>
      </nav>
      <div className="container-fluid">
        <Slider
          img={lista.img1}
          title={lista.tittle_description_1}
          text={lista.description_1}

        />
        <Slider
          flipped={true}
          img={lista.img2}
          title={lista.tittle_description_2}
          text={lista.description_2}

        />
        <Slider
          img={lista.img3}
          title={lista.tittle_description_3}
          text={lista.description_3}

        />
        <Slider
          flipped={true}
          img={lista.img4}
          title={lista.tittle_description_4}
          text={lista.description_4}

        />
      </div>
    </div>
  )
}