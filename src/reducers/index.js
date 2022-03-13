import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {
            title: 'Same Old Love',
            duration: '3:20'
        },
        {
            title: 'Who Says',
            duration: '1:20'
        },
        {
            title: 'Icecream',
            duration: '3:10'
        },
        {
            title: 'Sweat Dreams',
            duration: '3:25'
        }
    ]
}

const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === 'Song_Selected'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({ 
    songs: songsReducer,
    selectedSong: selectedSongReducer
})