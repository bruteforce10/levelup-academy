const secret = process.env.NEXT_PUBLIC_SECRET;
const encodedSecret = Buffer.from(secret).toString("base64");
const basicAuth = `Basic ${encodedSecret}`;

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/v2/${id}/status`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Basic U0ItTWlkLXNlcnZlci0tYlhiTVBmYk1LWjhGVzlfUmZpMWswaEE6",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Gagal mengambil data" });
  }
}
