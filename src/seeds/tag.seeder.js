import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import Tag from "../models/tag.model.js";

config();

/****** Command:  node src/seeds/tag.seeder.js ******/ 

const seedTags = [
  {
    title: 'HTML',
    level: 1,
    icon: '/images/html5.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'CSS',
    level: 1,
    icon: '/images/css3.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Javascript',
    level: 1,
    icon: '/images/javascript.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'PHP',
    level: 1,
    icon: '/images/php.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Laravel',
    level: 1,
    icon: '/images/laravel.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'MySQL',
    level: 1,
    icon: '/images/mysql.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'PostgreSQL',
    level: 1,
    icon: '/images/postgresql.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Vue Js',
    level: 1,
    icon: '/images/vue.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Git',
    level: 1,
    icon: '/images/git.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'jQuery',
    level: 1,
    icon: '/images/jquery.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Wordpress',
    level: 1,
    icon: '/images/wordpress.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Docker',
    level: 1,
    icon: '/images/docker.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'React',
    level: 1,
    icon: '/images/react.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'Node Js',
    level: 1,
    icon: '/images/nodejs.svg',
    status: true,
    mySkill: true,
  },
  {
    title: 'MongoDB',
    level: 1,
    icon: '/images/mongodb.svg',
    status: true,
    mySkill: true,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Tag.insertMany(seedTags);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();