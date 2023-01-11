export enum SortingValues {
  day = 'Day',
  event = 'Event',
  time = 'Time',
  price = 'Price',
  offers = 'Offers'
}

export const destinations = ['Amsterdam', 'Chamonix','Geneva', 'Bruxells', 'Dusseldorf'];

export const pointTypes = ["taxi", "bus", "train", "ship", "drive", "flight", "check-in", "sightseeing", "restaurant"];

export enum EmptyValues {
  everything = 'Click New Event to create your first point',
  past = 'There are no past events now',
  future  = 'There are no future events now'
}

export enum FilterValues {
  everything = 'Everything',
  future = 'Future',
  past = 'Past'
}
