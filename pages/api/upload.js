import connectDB from "@/libs/connectDB";
import makeId from "@/libs/makeId";
import Upload from "@/models/upload";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { title, description, priority, category, file, type } = req.body;
      const upload = await new Upload();
      upload.title = title;
      upload.description = description;
      upload.priority = priority;
      upload.category = category;
      upload.file = file;
      upload.type = type;
      upload.image_id = makeId(7);
      upload.createdAt = new Date();
      console.log(upload);
      await upload.save();
      return res.status(200).json({
        status: "upload successful",
        data: upload,
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
