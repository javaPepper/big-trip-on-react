import { Point } from '../types/point';

export const points: Point[] = [{
  base_price: 150,
  date_from: '2023-01-20T20:55:56',
  date_to:  '2023-01-22T13:22:13',
  destination: {
    description: 'nice, good place',
    name: 'Chamonix',
    pictures: [{
      src: 'http://picsum.photos/248/152?r=12654',
      description: 'good, nice place'
    },
    {
      src: 'http://picsum.photos/248/152?r=645441',
      description: 'good, nice place'
    },
    {
      src: 'http://picsum.photos/248/152?r=41546546',
      description: 'good, nice place'
    }]
  },
  id: '1',
  is_favorite: false,
  offers: [1, 3],
  type: 'taxi',
},
{
  base_price: 20,
  date_from: '2023-01-05T22:55:56',
  date_to:  '2023-01-06T19:22:13',
  destination: {
    description: 'Lorem ipsum dolor sit amet',
    name: 'Amsterdam',
    pictures: [{
      src: 'http://picsum.photos/248/152?r=46546',
      description: 'consectetur adipiscing elit'
    }]
  },
  id: '2',
  is_favorite: false,
  offers: [5],
  type: 'bus',
},
{
  base_price: 80,
  date_from: '2023-01-08T16:22:13',
  date_to:  '2023-01-08T22:55:56',
  destination: {
    description: 'Cras aliquet varius magna, non porta ligula feugiat eget',
    name: 'Geneva',
    pictures: [{
      src: 'http://picsum.photos/248/152?r=78976',
      description: 'Fusce tristique felis at fermentum pharetra'
    }]
  },
  id: '3',
  is_favorite: false,
  offers: [10, 11],
  type: 'flight',
},
{
  base_price: 95,
  date_from: '2023-01-14T22:55:56',
  date_to:  '2023-01-15T14:22:13',
  destination: {
    description: 'Aliquam id orci ut lectus varius viverra',
    name: 'Bruxells',
    pictures: [{
      src: 'http://picsum.photos/248/152?r=13413',
      description: 'Nullam nunc ex, convallis sed finibus eget'
    }]
  },
  id: '4',
  is_favorite: false,
  offers: [7],
  type: 'train',
},
{
  base_price: 100,
  date_from: '2023-01-10T12:22:13',
  date_to:  '2023-01-10T22:55:56',
  destination: {
    description: 'Phasellus eros mauris, condimentum sed nibh vitae',
    name: 'Dusseldorf',
    pictures: [{
      src: 'http://picsum.photos/248/152?r=65412',
      description: 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui'
    }]
  },
  id: '5',
  is_favorite: false,
  offers: [14, 15],
  type: 'sightseeing',
},
];
