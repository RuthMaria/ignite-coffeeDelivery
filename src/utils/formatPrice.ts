export const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
};
