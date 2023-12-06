const secret = process.env.NEXT_PUBLIC_SECRET;
const encodedSecret = Buffer.from(secret).toString("base64");
const basicAuth = `Basic ${encodedSecret}`;

export default async function handler(req, res) {
  const { id } = await req.body;
  console.log(id);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v2/${id}/cancel`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: basicAuth,
      },
    }
  );

  const data = await response.json();
  console.log(data);

  res.status(200).json(data);
}
