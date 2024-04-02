import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
import express from "express";
import jwt from "jsonwebtoken";
import user from "../models/User.js";
import employer from "../models/Employer.js";
import job from "../models/Job.js";

import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
const jwtSecret = "imsakaayan";

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      await user.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userData = await user.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Invalid email or password." });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);

      if (!pwdCompare) {
        return res.status(400).json({ errors: "Invalid email or password." });
      }

      const payload = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(payload, jwtSecret);

      res.json({ success: true, token: authToken });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

// Employer

router.post(
  "/createemployer",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("company").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      await employer.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        company: req.body.company,
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginemployer",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userData = await employer.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Invalid email or password." });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);

      if (!pwdCompare) {
        return res.status(400).json({ errors: "Invalid email or password." });
      }

      const payload = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(payload, jwtSecret);

      res.json({ success: true, token: authToken });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

// createjob : employer

router.post(
  "/createnewjob",
  [
    body("title").isLength({ min: 5 }),
    body("description").isLength({ min: 10 }),
    body("skill1").isLength({ min: 2 }),
    body("skill2").isLength({ min: 2 }),
    body("skill3").isLength({ min: 2 }),
    body("price").isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const data = new job({
        title: req.body.title,
        description: req.body.description,
        skill1: req.body.skill1,
        skill2: req.body.skill2,
        skill3: req.body.skill3,
        price: req.body.price,
      });
      await data.save();
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

// Fetch all jobs
router.get("/all_jobs", async (req, res) => {
  try {
    const jobs = await job.find(); // Fetch all jobs from the database
    res.json(jobs); // Send the list of jobs as a response
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
