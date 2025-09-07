import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import Project from "../models/project.model.js";
import mongoose from "mongoose";

config();

/****** Command:  node src/seeds/project.seed.js ******/

const seedProjects = [
  {
    title: "Will Management System",
    shortDescription: "A customized business software for the will management",
    description: "<p>This is a tailor-made CRM system that is for a will service and estate planning company. It is utilizing <strong>Laravel </strong>to ensure scalability, security, and high performance. This custom-built CRM solution includes a variety of modules to comprehensively address the business needs of the company.</p><p>Key modules integrated into the CRM system include:</p><p><strong>Staff Management</strong>: Handling salary, leave, and other HR functions.<br><strong>Customer Management</strong>: Efficiently managing client information and interactions.<br><strong>Introducer Management</strong>: Tracking and managing introducers and their contributions.<br><strong>Will Management</strong>: Overseeing the creation, storage, and updates of wills.<br><strong>Commission Management</strong>: Automating the calculation and distribution of commissions.<br>And many more…</p><p>A standout feature of this CRM system is its multi-login scheme, which allows users with different roles to access specific modules based on their permissions. This ensures that each user has access to the tools and information they need while maintaining strict security and privacy controls.</p>",
    websiteUrl: "www.mylegacy.testlab360.com/",
    status: true,
    projectDate: new Date("2022-11-01"),
    sequence: 1,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f08"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0c"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f03"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f05"), // 6
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"),
    ]
  },
  {
    title: "Health & Wellness CRM System",
    shortDescription: "This is a Health care CRM",
    description: "<p>It is an application designed for social experiences and corporate wellness that offers interesting social events, team-building exercises, and wellness programs to improve users\' overall wellness by assisting businesses, people, and communities in creating and maintaining a sustainable culture of health and wellness.&nbsp;</p>",
    websiteUrl: "www.admin-fitxcapes.testlab360.com",
    status: true,
    projectDate: new Date("2023-11-01"),
    sequence: 2,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"), // 8
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f08"), // 9
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0c"), // 13
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f03"), // 4
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"), // 5
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"), // 12
    ]
  },
  {
    title: "Informational Website",
    shortDescription: "An informational website for a steel manufacturing company",
    description: "<p>This is a fully customized informational website that is developed for a steel manufacturer company, featuring a comprehensive suite of pages including <strong>Home, About Us, Capabilities, Fabrication, Career, Contact Us, </strong>and <strong>Terms &amp; Condition</strong>. Built with <strong>VueJs </strong>and <strong>Laravel</strong>, this website boasts a fast, scalable, and secure online presence, enhanced by the <strong>Vuetify </strong>(Component Framework). Two submission forms are seamlessly integrated into the Contact Us and Career pages, allowing visitors to easily submit their enquiries.&nbsp;</p><p>Additionally, this website is empowered with a <strong>customized CMS</strong> (content management system) built in Laravel, enabling website admin to effortlessly update content and maintain a dynamic online presence.&nbsp;</p>",
    websiteUrl: "www.kploo.com",
    status: true,
    projectDate: new Date("2023-05-01"),
    sequence: 3,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0a"), // 11
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f08"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"),
    ]
  },
  {
    title: "Health care web application",
    shortDescription: "Web application that built to provide Health Transformation for a hospital",
    description: "<p>Hello World</p>",
    websiteUrl: "www.cah.testlab360.com",
    status: true,
    projectDate: new Date("2023-05-01"),
    sequence: 4,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0a"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f08"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f03"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0c"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
    ]
  },
  {
    title: "Informational Website",
    shortDescription: "WordPress informational website that integrated with WooCommerce.",
    description: "WordPress informational website that integrated with WooCommerce.', '<p>A <strong>WordPress </strong>website that is for a hardware product company to showcase their products and narrate their story and journey. The site leverages <strong>Elementor </strong>as the primary page builder, ensuring a user-friendly and visually appealing design. To customize the website further, <strong>CSS, PHP, </strong>and <strong>JavaScript</strong> were utilized to overwrite built-in styling and add unique functionalities.</p><p>This website also integrated with <strong>WooCommerce </strong>as the product management system to ensure easy navigation, clear product categorization. Hence, the website admin can easily display their products and update product content.</p><p>A key feature of this website is its<strong> fully responsive design</strong>, optimized for seamless performance across various screen sizes and devices, including mobile phones, tablets, laptops, and desktops. This ensures an optimal user experience, regardless of the device used to access the site.</p>",
    websiteUrl: "ch-group.0000.com.my",
    status: true,
    projectDate: new Date("2023-10-01"),
    sequence: 5,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0d"), // 14
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f06"), // 7
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f05"),

    ]
  },
  {
    title: "Hua Zong\'s Event(Landing Page)",
    shortDescription: "A Landing Page for educational fund charity golf event",
    description: "<p>It is a Hua Zong\'s event landing page about educational fund charity golf. This landing page is built by <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong> and<strong> jQuery</strong> within the <strong>Laravel</strong> framework. This <strong>fully responsive landing page</strong> is optimized for a seamless user experience across all devices such as <i>laptop</i>, <i>mobile</i>, <i>iPad</i>, <i>desktop </i>etc., ensuring that visitors can easily learn about the event. To add visual interest, smooth scrolling effects and interactive hover animations are incorporated, bringing the content to life.</p>",
    websiteUrl: "ch-group.0000.com.my",
    status: true,
    projectDate: new Date("2023-11-01"),
    sequence: 6,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f03"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0c"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"),
    ]
  },
  {
    title: "CRM System for Influencers",
    shortDescription: "CRM system to manage sales, reviews and more for social media influencers.",
    description: "<p>It is a custom-built CRM system developed with the purpose of <strong>Social Media Content Creator Management</strong>, <strong>Campaign Management</strong>, <strong>Revenue Reporting</strong>, <strong>Sales Tracking</strong>, <strong>Performance/Reviews Analytics, Claim Management </strong>and so on<strong>.&nbsp;</strong></p><p>I was responsible for the part of <strong>Performance/Reviews Analytics, </strong>as well as the<strong> Reporting System</strong> for Sales, and Campaign:<br><strong>Performance/Reviews Analytics: </strong>Manage and evaluate the success of the social media influencers. And gain insights into influencers\' performance, which helps to identify opportunities for growth and current trends.<br><strong>Reporting System: </strong>Generate detailed revenue and campaign reports to understand the financial health of the content creation business<strong>. </strong>Record and monitor sales &amp; revenue, enabling data-driven decisions to maximize ROI.</p><p>In the technical implementation of this system, it is developed in <strong>Laravel </strong>as the backend language, a powerful <strong>PHP</strong> framework known for its elegant syntax and robust feature set. Whereas the frontend and user interface part of this system, <strong>Vue JS</strong> is used to build a Single Page Application (SPA) that ensures a seamless and dynamic user experience., To maintain consistent styling across the application, we used <strong>Vuetify</strong>, a Vue.js component framework that offers a rich set of UI components like buttons, modals, and date pickers, Furthermore, the system\'s data is managed using <strong>MySQL</strong>, a reliable and efficient relational database.</p><p>For API Communication on this system, <strong>Axios </strong>is extensively used when building the communication between the frontend and backend. It handles all HTTP requests for fetching, posting, updating, and deleting data. This approach ensures that the frontend can seamlessly interact with the backend APIs to deliver a responsive and efficient user experience.</p>",
    websiteUrl: "www.crm-staging.talentify.com.my",
    status: true,
    projectDate: new Date("2024-04-01"),
    sequence: 7,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0a"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f08"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b")
    ]
  },
  {
    title: "Landing Page(Coffee Brand)",
    shortDescription: "A landing page of a coffee brand for Hari Raya Celebration 2024",
    description: "<p>This limited-time offer landing page for Hari Raya celebration 2024 is designed and built to provide a seamless and engaging experience for visitors to redeem exclusive vouchers. Developed with <strong>HTML, CSS, Bootstrap, </strong>and<strong> jQuery</strong> within the <strong>Laravel</strong> framework, this page ensures a fast and secure online experience.&nbsp;</p><p>It is optimized for almost all screen sizes, visitors can easily access and navigate the page to learn about the offer and redeem their vouchers through a streamlined submission form. To elevate the user experience, smooth scrolling, transitions effects and interactive hover animations are incorporated, bringing the content to life and making the redemption process a delight.<br>&nbsp;</p>",
    websiteUrl: null,
    status: true,
    projectDate: new Date("2024-04-01"),
    sequence: 8,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f03"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0c"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"),
    ]
  },
  {
    title: "Interior Design Website",
    shortDescription: "Informational website that\'s developed for an interior design company",
    description: "Informational website that\'s developed for an interior design company', '<p><strong>Features and Technologies 🖥</strong><br>A WordPress website for an interior design firm, meticulously crafted to showcase the firm’s portfolio of completed projects while narrating its unique story and journey. The website leverages the powerful Elementor page builder, which ensures an intuitive, user-friendly experience paired with visually stunning design elements and animation. To enhance the site\'s functionality and aesthetic, custom CSS, PHP, and JavaScript were integrated, allowing for tailored styles and additional features beyond the standard offerings.</p><p><strong>Performance Optimization ⚡</strong><br>To ensure the website operates efficiently and provides a smooth user experience, several performance optimization techniques were employed. These optimizations include the use of SpeedyCache and Autoptimize plugins, which significantly improve loading times and overall site performance.<br><i>SpeedyCache</i>: Implemented SpeedyCache to manage caching effectively, reducing server load and ensuring faster delivery of web pages to users. This helps in storing static versions of the website, which can be quickly served to visitors without the need for repetitive data processing.<br><i>Lazy Loading</i>: Applied lazy loading techniques for images and other media to ensure that content is only loaded when it enters the viewport, further enhancing page speed and reducing initial load times.</p><p><strong>SEO Implementation 📈</strong><br>Advanced SEO strategies were implemented to enhance the website’s visibility on search engines, making it easier for potential clients to discover the firm online. This includes optimizing site structure, content, alt text, and metadata to improve searchability and ranking.</p><p><strong>Fully Responsive 🖥️</strong><br>This website is fully responsive as it has been meticulously developed to provide seamless user experience across a multitude of screen sizes and devices, including mobile phones, tablets, laptops, and desktop computers. Users are guaranteed to have the optimal viewing experience, no matter which device they use to visit the website.</p>",
    websiteUrl: "www.visionaryinterior.com",
    status: true,
    projectDate: new Date("2024-07-01"),
    sequence: 9,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0d"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f06"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f05"),
    ]
  },
  {
    title: "Personal Portfolio",
    shortDescription: "Welcome to My Personal Portfolio Website",
    description: "<p><strong>Welcome to My Personal Portfolio Website 👋</strong></p><p>I\'m thrilled to introduce my personal portfolio website, a showcase of my previous projects and a testament to my skills as a developer. This website is designed to provide a seamless user experience, with a clean and modern design that\'s easy to navigate.</p><p><strong>Features and Technologies 🖥</strong></p><p>My website is built using a robust tech stack, including <i>Laravel</i> for the backend, <i>VueJs</i> for the frontend, and <i>Vuetify</i> for a consistent and visually appealing design. <i>CSS</i> was also used to do some customization on the styling and animations for this website. <i>MySQL</i> serves as the database, storing all the content that\'s easily manageable through a custom-built <i>CMS (content management system) </i>written in <i>Laravel</i>.</p><p><strong>Dynamic Content Management 🧭</strong></p><p>One of the key features of my website is its dynamic content management system. <i>Axios</i> is called every time when communicating with the database, such as fetching, updating, and storing data to the database, ensuring that the content is always up-to-date and fresh.</p><p><strong>Third-Party Integrations 🛠</strong></p><p>To enhance the user experience, I\'ve integrated several third-party plugins, including <i>VueperSlides</i> for smooth slide transitions, <i>CKeditor</i> for easy content editing, and <i>AOS</i> for animations that bring the website to life.</p>",
    websiteUrl: "www.github.com/jcleong1223/ljc-portfolio",
    status: true,
    projectDate: new Date("2024-07-01"),
    sequence: 99,
    thumbnail: new mongoose.Types.ObjectId("686b451b0da5b6fb758da61d"),
    tags: [
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0a"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f07"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f04"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f08"),
      new mongoose.Types.ObjectId("6866b98de74cda66ee2f7f0b"),
    ]
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Project.insertMany(seedProjects);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();