import express from "express";

import {
  createSchool,
  getAllSchool,
  deleteSchool,
  getSchoolById,
  updateSchool,
} from "../controller/schools.js";

const schoolRouter = express.Router();

schoolRouter.route("/").get(getAllSchool);
schoolRouter
  .route("/:id")
  .get(getSchoolById)
  .delete(deleteSchool)
  .put(updateSchool);
schoolRouter.route("/createSchool").post(createSchool);

export default schoolRouter;
