export const Discount = (price) => {
  let harga = Number(price);
  harga = Math.round(harga) - Math.round(harga) * 0.95;

  return harga;
};
