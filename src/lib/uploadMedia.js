import express from 'express';
import upload from './multer.js';
import cloudinary from './cloudinary.js';
import Media from '../models/media.model.js';
import Project from '../models/project.model.js';

const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
  try {

    const { projectId } = req.body; /****** pass project ID from frontend ******/
    const file = req.file;

    /******  Upload to Cloudinary (original image) ******/
    const result = await cloudinary.uploader.upload_stream(
      {
        folder: 'project-images',
        resource_type: 'image',
      },
      async (error, result) => {
        if (error) {
          return res.status(500).json({ message: 'Cloudinary error', error });
        }

        /****** Generate thumbnail URL using Cloudinary transformation ******/
        const thumbnailUrl = cloudinary.url(result.public_id, {
          width: 300,
          height: 300,
          crop: 'fill',
          format: result.format,
        });

        const image = new Media({
          name: result.original_filename,
          url: result.secure_url,
          thumbnail: thumbnailUrl,
          size: result.bytes,
          extension: result.format,
          mimeType: result.resource_type + '/' + result.format,
          publicId: result.public_id
        });

        const savedImage = await image.save();

        await Project.findByIdAndUpdate(projectId, {
          $push: { images: savedImage._id }
        });

        res.status(200).json(savedImage);
      }
    );

    /****** Write to the stream ******/
    if (file && file.buffer) {
      result.end(file.buffer);
    } else {
      return res.status(400).json({ message: 'No file buffer found' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
});

export default router;