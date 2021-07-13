import { BASE_PATH } from "../utils/constants";
import { authFetch } from "../utils/fetch";
import { size } from "lodash";

export async function isFavoriteApi(idUser, idLavori, logout) {
  try {
    const url = `${BASE_PATH}/favorites?users_permissions_user=${idUser}&lavori=${idLavori}`;
    const result = await authFetch(url, null, logout);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function addFavoriteApi(idUser, idLavori, logout) {
  try {
    const dataFound = await isFavoriteApi(idUser, idLavori, logout);
    if (size(dataFound) > 0 || !dataFound) {
      return "este juego lo tiene en favoritos";
    } else {
      const url = `${BASE_PATH}/favorites`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          users_permissions_user: idUser,
          lavori: idLavori,
        }),
      };
      const result = await authFetch(url, params, logout);
      return result;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function deleteFavoriteApi(idUser, idLavori, logout) {
  try {
    const dataFound = await isFavoriteApi(idUser, idLavori, logout);
    if (size(dataFound) > 0) {
      const url = `${BASE_PATH}/favorites/${dataFound[0]?._id}`;
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await authFetch(url, params, logout);
      return result;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getFavoriteApi(idUser, logout) {
  try {
    const url = `${BASE_PATH}/favorites?users_permissions_user=${idUser}`;
    const result = await authFetch(url, null, logout);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}