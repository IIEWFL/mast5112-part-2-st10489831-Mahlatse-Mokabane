import { ReactNode } from "react";
export interface MenuItem {
  desc: string;
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
  image?: string;
}

export type Course = "Starter" | "Main" | "Dessert" | "Drink" | "Side";
