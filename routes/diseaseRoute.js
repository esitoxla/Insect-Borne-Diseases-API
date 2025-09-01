import { Router } from "express";
import { addDisease, editDisease, getDiseaseById, getDiseaseByRegion, getDiseaseByVector, getDiseases, removeDisease } from "../controllers/diseaaseController.js";


const router = Router();

router.get("/", getDiseases);

router.get("/:id", getDiseaseById);

router.get("/vectors/:vector", getDiseaseByVector);

router.get("/regions/:region", getDiseaseByRegion);

router.post("/", addDisease);

router.put("/:id", editDisease);

router.delete("/:id", removeDisease);

export default router;