import {combineReducers} from 'redux'

const songReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:30'},
    {title: 'Macareena', duration: '2:59'},
    {title: 'All Star', duration: '4:21'},
    {title: 'Susis', duration: '5:22'}
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload
    default:
      return selectedSong
  }
}

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
})