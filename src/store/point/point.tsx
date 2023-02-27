import { Point } from '../../types/point';

export const point: Point = {
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
};
