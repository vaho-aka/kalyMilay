export type FoodItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount?: number;
  category: string;
  ingredients: string[];
  preparationTime: number;
  isAvailable: boolean;
};
