import express from "express";

const router = express.Router();

// controllers
const {
  createTimelineItem,
  readTimelineItem,
  readTimeline,
  updateTimelineItem,
  deleteTimelineItem,
} = require("../controllers/timeline");

router.post("/timeline", createTimelineItem);
router.get("/timeline/:id", readTimelineItem);
router.get("/timeline", readTimeline);
router.post("/edit-timeline/:id", updateTimelineItem);
router.delete("/timeline/:id", deleteTimelineItem);

export default router;
