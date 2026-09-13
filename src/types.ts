export interface Product {
  id: string;
  name: string;
  category: 'Cakes' | 'Cupcakes' | 'Cookies' | 'Pastries' | 'Donuts' | 'Muffins' | 'Waffles';
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  isEggless: boolean;
  badge?: string;
  prepTime?: string;
}

export type CardCategory =
  | 'Birthday'
  | 'Anniversary'
  | 'Thank You'
  | 'Congratulations'
  | 'Get Well Soon'
  | 'Best Wishes'
  | 'Just For You'
  | 'Celebration';

export interface WishingCardTemplate {
  id: string;
  title: string;
  category: CardCategory;
  coverImage: string;
  insideImage: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  defaultMessage: string;
  quoteSnippet: string;
  icon: string;
  stickers: string[];
}

export interface CustomizedCard {
  id: string;
  templateId: string;
  title: string;
  category: CardCategory;
  recipientName: string;
  senderName: string;
  message: string;
  stickers: string[];
  coverImage: string;
  bgColor: string;
  accentColor: string;
}

export interface CustomCakeOrder {
  fullName: string;
  mobileNumber: string;
  email: string;
  cakeType: string;
  cakeSize: string;
  flavor: string;
  filling: string;
  frosting: string;
  themeColor: string;
  isEggless: boolean;
  cakeMessage: string;
  quantity: number;
  deliveryDate: string;
  deliveryTime: string;
  specialInstructions: string;
  totalPrice: number;
}

export interface CartItem {
  id: string;
  type: 'product' | 'custom_cake';
  product?: Product;
  customCake?: CustomCakeOrder;
  quantity: number;
  unitPrice: number;
  attachedCard?: CustomizedCard;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  favoriteDessert: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  itemCount: string;
}
