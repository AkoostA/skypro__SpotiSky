const trackSelector = (store) => store.tracks;

const allTracksSelector = (store) => trackSelector(store)?.allTracks || [];
export const playTrackSelector = (store) => trackSelector(store)?.playTrack || [];
export const activeTrackSelector = (store) => trackSelector(store)?.activeTrack || [];
export const shuffleTracksSelector = (store) => trackSelector(store)?.shuffleTracks || [];
export const userSelector = (store) => trackSelector(store)?.user || [];
export const favoritesTracksSelector = (store) => trackSelector(store)?.favoriteTracks || [];
export const tokenSelector = (store) => trackSelector(store)?.token || [];

export default allTracksSelector;
