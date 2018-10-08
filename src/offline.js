import { GET_NOTES } from "./sharedQueries";

export const saveNotes = cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);
  try {
    localStorage.setItem("notes", jsonNotes);
  } catch (error) {
    console.log(error);
  }
};

export const restoreNotes = cache => {
  const notes = localStorage.getItem("notes");
  try {
    const parsedNotes = JSON.parse(notes);
    if (parsedNotes !== null) {
      return parsedNotes;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
