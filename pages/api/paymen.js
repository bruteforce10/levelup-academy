const secret = process.env.NEXT_PUBLIC_SECRET;
const encodedSecret = Buffer.from(secret).toString("base64");
const basicAuth = `Basic ${encodedSecret}`;

export default async function handler(req, res) {
  const { id } = await req.params;
  console.log(id);

  try {
    const response = await fetch(
      "https://api.sandbox.midtrans.com/v2/clojfosa4fr7r0b1nyjto9azr94.874141814388611/status",
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
