import Midtrans from "midtrans-client";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.NEXT_PUBLIC_SECRET,
  clientKey: process.env.NEXT_PUBLIC_CLIENT,
});

export default async function handler(req, res) {
  const { id, productName, price, quantity } = await req.body;
  let parameter = {
    item_details: {
      name: productName,
      price: price,
      quantity: quantity,
    },
    transaction_details: {
      order_id: id,
      gross_amount: price * quantity,
    },
  };

  const token = await snap.createTransaction(parameter);
  console.log(token);
  res.status(200).json({
    token: token.token,
    redirect: token.redirect_url,
  });
}
