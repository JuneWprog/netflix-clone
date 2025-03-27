import { User } from "../models/user.model.js";
import { fetchFromTMDB } from "../services/tmdb.service.js";
import { History } from "../models/history.model.js";

export async function searchPerson(req, res) {
	const { query } = req.params;
	try {
		const response = await fetchFromTMDB(
			`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
		);

		if (response.results.length === 0) {
			return res.status(404).send(null);
		}

		const image = response.results[0].profile_path
		const title = response.results[0].name

			const newHistory = new History({
				userId: req.user._id,
				image: image,
				title: title,
			  searchType: "person",
			}).save();
		
		
		res.status(200).json({ success: true, content: response.results });
	} catch (error) {
		console.log("Error in searchPerson controller: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export const searchMovie = async (req, res) => {
	const { query } = req.params;
	try {
	  const response = await fetchFromTMDB(
		`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
	  );
  
	  if (response.results.length === 0) {
		return res.status(404).send(null);
	  }
	  const image = response.results[0].poster_path
	  const title = response.results[0].title
  
	  const newHistory = new History({
		  userId: req.user._id,
		  image: image,
		  title: title,
		  searchType: "movie",
		}).save();
	
		res.status(200).json({ success: true, content: response.results });
	  
	} catch (error) {
	  console.log("Error in searchMovie controller: ", error.message);
	  res.status(500).json({ success: false, message: "Internal Server Error" });
	}
  };
  

  export const searchTv = async (req, res) => {
	const { query } = req.params;
	try {
	  const response = await fetchFromTMDB(
		`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`
	  );
  
	  if (response.results.length === 0) {
		return res.status(404).send(null);
	  }
	  const image = response.results[0].poster_path
	  const title = response.results[0].name
  
	  const newHistory = new History({
		  userId: req.user._id,
		  image: image,
		  title: title,
		  searchType: "tv",
		});
	
		if (newHistory) {
		  await newHistory.save();
		}
	
		res.status(200).json({ success: true, content: response.results });
  
	  
	} catch (error) {
	  console.log("Error in searchMovie controller: ", error.message);
	  res.status(500).json({ success: false, message: "Internal Server Error" });
	}
  };
  
export const getSearchHistory = async (req, res) => {
	try {
	  const historyList = await History.find({ userId: req.user._id }).sort({
		createdAt: -1,
	  });
	  if (!historyList) {
		return res.status(404).send(null);
	  }
	  res.status(200).json({ success: true, content: historyList });
	} catch (error) {
	  res.status(500).json({ success: false, message: "Internal Server Error" });
	}
  };
  
  export const removeItemFromSearchHistory = async (req, res) => {
	  const  id  = req.params;
	  
	 try {
  
	  const historyItem = await History.findByIdAndDelete(req.params.id);
	  if (!historyItem) {
		return res.status(404).json({ success: false, message: "Item not found" });
	  }
  
	  res.status(200).json({ success: true, message: "Item removed from search history" });
	} catch (error) {
	  console.log(
		"Error in removeItemFromSearchHistory controller: ",
		error.message
	  );
	  res.status(500).json({ success: false, message: "Internal Server Error" });
	}
  };
  