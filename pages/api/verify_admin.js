import connectDB from "@/libs/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { username, password } = req.body;
      let isAdmin = false;
      if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
      ) {
        isAdmin = true;
      }
      return res.json({
        status: "Admin verification",
        data: isAdmin,
      });
    } catch (error) {
      return res.json({
        status: "error",
        data: error,
      });
    }
  } else {
    return res.json({
      status: "error",
      data: "Invalid Request Method",
    });
  }
}
