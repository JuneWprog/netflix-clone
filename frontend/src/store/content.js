
import { create } from "zustand";

//returns a custom hook that allows you to access and update the state within your components.
//create a store with a single piece of state called contentType
//setContentType is a function that allows you to update the contentType state

export const useContentStore = create((set) =>({
    contentType: "movie",
	setContentType: (type) => set({ contentType: type }),
}));


