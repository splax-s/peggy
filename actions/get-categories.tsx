import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await axios
    .get(URL)
    .then((response) => response)
    .then((data) => {
      return data;
    });

  return res.data; // Return the data from the response
};

export default getCategories;
