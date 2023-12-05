const secret = process.env.NEXT_PUBLIC_SECRET;
const encodedSecret = Buffer.from(secret).toString("base64");
const basicAuth = `Basic ${encodedSecret}`;

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.sandbox.midtrans.com/v2/cloy5ft49f6r40b2myijx2ika/status`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: basicAuth,
        },
      }
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Gagal mengambil data" });
  }
}
