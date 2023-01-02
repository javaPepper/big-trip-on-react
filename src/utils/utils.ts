import dayjs from "dayjs";
import { Offer } from "../types/offer";

export const getRandomElement = (array: string[] ) => array[Math.floor(Math.random()*array.length)];
export const getRandomOffers = (array: Offer[] ) => array[Math.floor(Math.random()*array.length)];
export const getRandomNumber = (array: number[] ) => array[Math.floor(Math.random()*array.length)];

export const setDate = (date: Date) => dayjs(date).format('MMM D');
export const setTime = (time: string) => dayjs(time).format('h:mm');

