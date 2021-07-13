import { BASE_PATH } from "../utils/constants";

export async function getLavoriPlatformsApi(platform, limit, start) {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = `_sort=createdAt:desc`;
    const starItems = `_start=${start}`;
    const url = `${BASE_PATH}/lavoris?platform.url=${platform}&${limitItems}&${sortItems}&${starItems}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getLavoriByUrlApi(path) {
  try {
    const url = `${BASE_PATH}/lavoris?url=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    return result[0];
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function searchLavoriApi(title) {
  try {
    const url = `${BASE_PATH}/lavoris?_q=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
