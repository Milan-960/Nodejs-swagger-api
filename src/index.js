import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

import bodyParser from "body-parser";

// Import the router from the hello.js file
import postRouter from "./Routes/posts.js";
import helloRouter from "./hello.js";

const app = express();

app.use(bodyParser.json()); // to use body object in requests
const PORT = process.env.PORT || 2000;
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:2000",
        description: "My API Documentation",
      },
    ],
  },
  // This is to call all the files
  apis: ["src/**/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Here we are calling the basic html
// Use the router from the hello.js file
app.use("/", helloRouter);
// Use the router from the post.js file
app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server runs on port ${PORT}`));
