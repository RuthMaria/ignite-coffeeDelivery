import { createContext, ReactNode, useState } from 'react';

export interface Coffee {
  id: string;
  photo: string;
  name: string;
  price: number;
  amount: number;
  totalPrice: number;
}

interface ShoppingCartContextTypes {
  shoppingCart: Coffee[];
  isEmptyShoppingCart: boolean;
  numberItemsShoppingCart: number;
  removeCoffee: (id: string) => any;
  addCoffee: (coffee: Coffee) => void;
  addAmount: (id: string, amount: number) => any;
}

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextTypes
);

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

export const ShoppingCartContextProvider: React.FC<
  ShoppingCartContextProviderProps
> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<Coffee[]>([]);

  const addCoffee = (coffee: Coffee) => {
    setShoppingCart([...shoppingCart, coffee]);
  };

  const isEmptyShoppingCart = shoppingCart.length === 0;
  const numberItemsShoppingCart = shoppingCart.length;

  const removeCoffee = (id: string) => {
    const newShoppingCart = shoppingCart.filter((coffee) => {
      return coffee.id !== id;
    });

    setShoppingCart(newShoppingCart);
  };

  const addAmount = (id: string, amount: number) => {
    const newShoppingCart = shoppingCart.filter((coffee) => {
      if (coffee.id === id) {
        coffee.amount = amount;
      }
    });

    setShoppingCart(newShoppingCart);
  };

  const decreaseAmount = () => {};

  return (
    <ShoppingCartContext.Provider
      value={{
        addAmount,
        addCoffee,
        shoppingCart,
        removeCoffee,
        isEmptyShoppingCart,
        numberItemsShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
