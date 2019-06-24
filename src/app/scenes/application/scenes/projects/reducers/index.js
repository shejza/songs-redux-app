import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Seniorita",
      duration: "3:05"
    },
    {
      title: "Macarena",
      duration: "2:01"
    },
    {
      title: "All Star",
      duration: "3:02"
    },
    {
      title: "I want it that way",
      duration: "4:07"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
