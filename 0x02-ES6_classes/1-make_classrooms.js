import ClassRoom from './ClassRoom';

export function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = sizes.map(size => new ClassRoom(size));
  return rooms;
}
