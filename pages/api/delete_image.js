import connectDB from "@/libs/connectDB";
import Upload from "@/models/upload";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { image_id } = req.body;
      if (image_id) {
        await Upload.deleteOne({ image_id: image_id });
        return res.status(200).json({
          status: "success",
          message: "Image deleted successfully",
        });
      } else {
        return res.status(400).json({
          status: "failed",
          message: "please provide image id",
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: "error",
        error: err,
      });
    }
  } else {
    return res.json({
      status: "error",
      message: "Invalid Request Method",
    });
  }
}
