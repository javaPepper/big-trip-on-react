import { nanoid } from "@reduxjs/toolkit";
import { destinations, pointOffers, pointType } from "../const";
import { getRandomElement, setDate } from "../utils/utils";

export const point = {
  base_price: 1500,
  date_from: setDate(new Date),
  date_to: setDate(new Date),
  destination: getRandomElement(destinations),
  id: nanoid(),
  is_favorite: false,
  offers: [getRandomElement(pointOffers)],
  type: getRandomElement(pointType),
}
