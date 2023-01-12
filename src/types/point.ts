import { Destination } from "./destination"

export type Point = {
  basePrice: number,
  dateFrom: string,
  dateTo: string,
  destination: Destination,
  id: string,
  isFavorite: boolean,
  offers: number[],
  type: string
}
