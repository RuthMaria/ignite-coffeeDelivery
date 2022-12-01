import { Coffee } from './reducer';

export enum ActionTypes {
  ADD_COFFEE_SHOPPING_CART = 'ADD_COFFEE_SHOPPING_CART',
  ADD_AMOUNT_COFFEE_SHOPPING_CART = 'ADD_AMOUNT_COFFEE_SHOPPING_CART',
  DECREASE_AMOUNT_COFFEE_SHOPPING_CART = 'DECREASE_AMOUNT_COFFEE_SHOPPING_CART',
  REMOVE_COFFEE_SHOPPING_CART = 'REMOVE_COFFEE_SHOPPING_CART',
  REMOVE_ALL_COFFEE_SHOPPING_CART = 'REMOVE_ALL_COFFEE_SHOPPING_CART',
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

export function removeAllCoffeeShoppingCartAction() {
  return {
    type: ActionTypes.REMOVE_ALL_COFFEE_SHOPPING_CART,
  };
}

export function addAmountCoffeeShoppingCartAction(id: string) {
  return {
    type: ActionTypes.ADD_AMOUNT_COFFEE_SHOPPING_CART,
    payload: {
      id,
    },
  };
}

export function decreaseAmountCoffeeShoppingCartAction(id: string) {
  return {
    type: ActionTypes.DECREASE_AMOUNT_COFFEE_SHOPPING_CART,
    payload: {
      id,
    },
  };
}
