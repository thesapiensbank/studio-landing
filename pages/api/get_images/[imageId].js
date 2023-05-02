import connectDB from "@/libs/connectDB";
import Upload from "@/models/upload";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const { imageId } = req.query;
      const data = await Upload.find({ category: imageId });
      return res.json({
        status: "Fetch successully",
        message: data,
      });
    } catch (error) {
      return res.json({
        status: "error",
        message: error,
      });
    }
  } else {
    return res.json({
      status: "error",
      message: "Invalid Request Method",
    });
  }
}
