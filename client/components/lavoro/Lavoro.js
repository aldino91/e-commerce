import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Preferido, NoPreferido } from "../iconos/FavoriteImg";
import {
  isFavoriteApi,
  addFavoriteApi,
  deleteFavoriteApi,
} from "../../api/Favorite";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { size } from "lodash";

export default function Lavoro({ lavori }) {
  const { auth, logout } = useAuth();
  const { poster, price, url } = lavori;
  const { addProductsCart } = useCart();

  return (
    <div className="flex flex-col w-full py-5 lg:flex-row lg:justify-around">
      <div className="flex flex-row justify-center lg:w-2/5">
        <img
          src={poster.url}
          width={300}
          height={300}
          className="border rounded-md"
        />
      </div>
      <div className="px-3 lg:w-3/5">
        <Info lavori={lavori} />
        <div className="text-center bg-gray-400">
          <h2 className="text-white">ENTREGA EN 24/48H</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            suscipit tellus. Sed pulvinar urna ante, in vehicula massa vulputate
            nec. Aenean at commodo ligula. Praesent non lectus fermentum,
            lobortis erat id, blandit ex. Vivamus vel dignissim felis. Morbi
            cursus diam vel nibh dignissim, at hendrerit nisl iaculis.
            Suspendisse eu egestas enim. Fusce at maximus nunc. Ut dignissim
            varius purus et cursus. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Etiam facilisis, mi nec feugiat interdum, elit
            diam hendrerit nulla, condimentum lobortis felis mi in risus. Morbi
            non felis sem. Morbi ultricies a turpis nec ornare. Pellentesque
            consequat consequat lacus, pretium lacinia erat. Cras vitae auctor
            orci.
          </p>
        </div>
        <div className="flex flex-row justify-between py-7">
          <h3>Precio:{price}€</h3>
          <button
            className="w-1/4 p-1 text-sm font-bold text-white transition-all duration-150 ease-linear bg-black rounded shadow outline-none hover:text-black hover:bg-white hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => addProductsCart(url)}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ lavori }) {
  const { title } = lavori;
  const [isFavorites, setIsFavorites] = useState(false);
  const [reloadFavorite, setReloadFavorite] = useState(false);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      if (auth) {
        const response = await isFavoriteApi(auth.idUser, lavori.id, logout);
        if (size(response) > 0) setIsFavorites(true);
        else setIsFavorites(false);
      } else {
        toast.warning(
          "Para hacer compras o anadirlo al carrito tienes que inciar sesion"
        );
      }
    })();
  }, [lavori, reloadFavorite]);

  const addFavorite = async () => {
    if (auth) {
      await addFavoriteApi(auth.idUser, lavori.id, logout);
      setReloadFavorite(true);
    } else {
      toast.warning("Para elejir tus preferidos tienes que iniciar sesion");
    }
  };

  const deleteFavorite = async () => {
    if (auth) {
      await deleteFavoriteApi(auth.idUser, lavori.id, logout);
      setReloadFavorite(false);
    } else {
      toast.warning("Para elejir tus preferidos tienes que iniciar sesion");
    }
  };
  return (
    <div className="flex flex-row justify-around">
      <h2 className="text-black">{title}</h2>
      <div>
        <div onClick={isFavorites ? deleteFavorite : addFavorite}>
          {isFavorites ? <Preferido /> : <NoPreferido />}
        </div>
      </div>
    </div>
  );
}
