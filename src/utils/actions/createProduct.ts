"use server";

import { ICreateProduct } from "@/types";

export const createProduct = async (data: ICreateProduct) => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const productInfo = await res.json();
  return productInfo;
};
