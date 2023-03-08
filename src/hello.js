import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json()); // to use body object in requests

// export default router;
router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
