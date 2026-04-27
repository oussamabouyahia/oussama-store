"use server";

import { ProductParams } from "@/shared.types";
import { createClient } from "../supabase/server";

export async function fetchProducts(): Promise<ProductParams[]> {
  const supabase = await createClient();
  let { data: products, error } = await supabase.from("products").select("*");
  if (error) {
    console.error(error);
  }
  return products ?? [];
}
export async function fetchProductById(
  id: string,
): Promise<ProductParams | null> {
  const supabase = await createClient();
  let { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
  }
  return product;
}
