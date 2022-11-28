import { Coffee } from './reducer';

export enum ActionTypes {
  ADD_COFFEE_SHOPPING_CART = 'ADD_COFFEE_SHOPPING_CART',
  REMOVE_COFFEE_SHOPPING_CART = 'REMOVE_COFFEE_SHOPPING_CART',
}

export function addCoffeeShoppingCartAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_COFFEE_SHOPPING_CART,
    payload: {
      coffee,
    },
  };
}

export function removeCoffeeShoppingCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_SHOPPING_CART,
    payload: {
      id,
    },
  };
}
