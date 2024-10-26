export interface FoodItem {
  _id: string;
  title: string;
  description: string;
  price: number;
  ratings: number;
  category: string;
  image: string;
  quantity: number;
}

export interface User {
  _id: string;
  name: string;
  imageUrl: string;
  email: string;
  password: string;
}

export interface CartItem {
  food: FoodItem;
  amount: number;
}

export interface State {
  loading: boolean;
  error: string;
}

export interface UserState extends State {
  userLoggedIn: User;
}

export interface loginType {
  email: string;
  password: string;
}

export interface registerType extends loginType {
  username: string;
}

export interface FoodState extends State {
  foods: FoodItem[];
  food: FoodItem;
}

export interface CartState {
  dishes: CartItem[];
  totalAmount: number;
}

export interface StorageHookResult<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => Promise<void>;
  removeValue: () => Promise<void>;
  loading: boolean;
  error: Error | null;
}
