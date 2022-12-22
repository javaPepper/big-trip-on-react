import dayjs from "dayjs";

export const getRandomElement = (array: string[]) => array[Math.floor(Math.random()*array.length)];

export const setDate = (date: Date) => dayjs(date).format('MMM D');
export const setTime = (time: string) => dayjs(time).format('h:mm');

