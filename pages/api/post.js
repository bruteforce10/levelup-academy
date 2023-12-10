import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
  isProduction: true,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export default async function handler(req, res) {
  const { id, productName, price, quantity } = await req.body;
  console.log(id, productName, price, quantity);
  let parameter = {
    item_details: {
      name: productName,
      price: price,
      quantity: quantity,
    },
    transaction_details: {
      order_id: id,
      gross_amount: price,
    },
  };

  const token = await snap.createTransaction(parameter);
  console.log(token);
  res.status(200).json({
    id: parameter.transaction_details.order_id,
    token: token.token,
    redirect: token.redirect_url,
  });
}
