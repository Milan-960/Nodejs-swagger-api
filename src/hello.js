import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

const router = express();

router.use(bodyParser.json()); // to use body object in requests
router.use(morgan("dev"));
router.use(cors());
router.set("view engine", "ejs");

// export default router;
// router.get("/", (req, res) => {
//   res.render("pages/index");
// });

router.get("/", (req, res) => {
  res.render("pages/index");
});

export default router;
