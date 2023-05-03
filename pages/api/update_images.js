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
      const { title, description, priority, category, file, type, image_id } =
        req.body;
      const image = await Upload.findOne({ image_id: image_id });
      image.title = title;
      image.description = description;
      image.priority = priority;
      image.category = category;
      image.file = file;
      image.type = type;
      await image.save();
      return res.status(200).json({
        status: "Image Update successful",
        data: image,
      });
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
