export type FoodItem = {
  _id: string;
  title: string;
  description: string;
  price: number;
  ratings: number;
  category: string;
  image: string;
};

export type User = {
  _id: string;
  name: string;
  imageUrl: string;
  email: string;
  password: string;
};

export interface CartItem {
  product: FoodItem;
  amount: number;
}

export type State = {
  loading: boolean;
  error: string;
};

export interface UserState extends State {
  userLoggedIn: User;
}

export type loginType = {
  email: string;
  password: string;
};

export interface registerType extends loginType {
  username: string;
}

export interface FoodState extends State {
  foods: FoodItem[];
  product: FoodItem;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}
