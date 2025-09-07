import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import Cert from "../models/cert.model.js";

config();

/****** Command:  node src/seeds/tag.seeder.js ******/ 

const seedTags = [
  {
    title: 'Google UX Design Specification',
    sequence: 4,
    status: true,
    image: '/images/html5.svg',
  },
  {
    title: 'Google IT Support Certificate',
    sequence: 3,
    status: true,
    image: '/images/css3.svg',
  },
  {
    title: 'CompTIA Security+ ce Certificate',
    sequence: 1,
    status: true,
    image: '/images/javascript.svg',
  },
  {
    title: 'Android Certified Developer',
    sequence: 2,
    status: true,
    image: '/images/javascript.svg',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Cert.insertMany(seedTags);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();