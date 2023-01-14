import { Destination } from "./destination"

export type Point = {
  base_price: number,
  date_from: string,
  date_to: string,
  destination: Destination,
  id: string,
  isFavorite: boolean,
  offers: number[],
  type: string
}
