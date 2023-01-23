export enum SortRenderValues {
  day = 'Day',
  event = 'Event',
  time = 'Time',
  price = 'Price',
  offers = 'Offers'
}

export enum SortingValues {
  day = 'sort-day',
  price = 'sort-price',
  time = 'sort-time'
}

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

export const BACKEND_URL = 'https://17.ecmascript.pages.academy/big-trip';
export const REQUEST_TEMEOUT = 5000;

export const enum ApiRoutes {
  points = '/points',
  destinations = '/destinations',
  offers = '/offers',
}
