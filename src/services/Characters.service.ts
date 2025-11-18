import axios from 'axios';
import { IFilterState } from '@/interfases/filters';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (currentPage: number, filters: IFilterState) => {
  try {
    const queryParams = new URLSearchParams({
      page: currentPage.toString(),
      name: filters.name || "",
      status: filters.status || "",
      species: filters.species || "",
    });

    const response = await axios.get(`${BASE_URL}/character/?${queryParams}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener los personajes`, error);
    throw error;
  }
};


export const fetchCharacterById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el personaje con ID ${id}:`, error);
    throw error;
  }
};