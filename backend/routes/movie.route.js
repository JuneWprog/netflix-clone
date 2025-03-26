import express from "express";
import {getMovieDetails, getMovieTrailers,getMoviesByCategory, getSimilarMovies, getTrendingMovies } from "../controllers/movie.controller.js";

const router = express.Router();
router.get("/trending", getTrendingMovies);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;