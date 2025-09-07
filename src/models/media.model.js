import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  name: String,
  url: String,
  thumbnail: String,
  size: Number,
  extension: String,
  mimeType: String,
  priority: Number,
  publicId: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Media = mongoose.model('Media', mediaSchema);
export default Media;
