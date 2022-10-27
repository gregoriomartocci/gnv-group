import express from "express";

const router = express.Router();

// controllers
const {
  CreateTimelineItem,
  ReadTimelineItem,
  ReadTimeline,
  UpdateTimelineItem,
  DeleteTimelineItem,
} = require("../controllers/timeline");

router.post("/timeline", CreateTimelineItem);
router.get("/timeline/:id", ReadTimelineItem);
router.get("/timeline", ReadTimeline);
router.post("/edit-timeline/:id", UpdateTimelineItem);
router.delete("/timeline/:id", DeleteTimelineItem);

export default router;
