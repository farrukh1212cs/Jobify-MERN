import express from "express";
const router = express.Router();

import { createJob,updateJob,deleteJob,getAllJobs,showStats } from "../controllers/jobController.js";


router.route('/').post(createJob).get(getAllJobs);
//place before :id
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router;