import connectDB from "@/libs/connectDB";
import Upload from "@/models/upload";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
import multer from "multer";
import nc from "next-connect";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(process.cwd(), "public", "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, new Date().getTime() + "-" + file.originalname);
    },
  }),
});

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("something broke");
  },
  onNoMatch: (req, res, next) => {
    res.status(500).end("page not found");
  },
})
  .use(upload.single("image"))
  .post(async (req, res) => {
    try {
      await connectDB();
      const { title, description, priority, category } = req.body;
      const file = req.file;
      const upload = await new Upload();
      upload.title = title;
      upload.description = description;
      upload.priority = priority;
      upload.category = category;
      upload.file = process.env.STATIC_RESOURCE_URL + "/" + file.filename;
      upload.createdAt = new Date();
      console.log(upload);
      await upload.save();
      return res.status(200).json({
        status: "upload successful",
        data: upload,
      });
    } catch (err) {
      return res.json({
        status: "error",
        error: err,
      });
    }
  });

export default handler;
