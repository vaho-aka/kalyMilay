export type FoodItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  categoryId: string;
  tags: string[];
  nutritionInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  preparationTime: number; // in minutes
  isAvailable: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  allergens?: string[];
};
