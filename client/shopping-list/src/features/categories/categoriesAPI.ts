import axios from 'axios';
import { config } from '../../config';

export interface Category {
  id: number;
  name: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(config.apiBaseUrl);
  return response.data;
};
