import { Point } from '../../types/point';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActivePoint, setClickedEdit, setClickedAddNewButton, setActiveOffers } from '../../store/actions';
import EditPointComponent from '../edit-point/edit-point';
import { getOffersByPoint } from '../../utils';
import { Offer } from '../../types/offer';
import { putEditPointAction } from '../../store/api-actions';

type RoutePointProps = {
  point: Point;
  isActive?: boolean;
  pointOffers: Offer[];
};

function RoutePoint({ point, isActive, pointOffers }: RoutePointProps) {
  const { base_price, destination, type, offers, date_from, date_to, id, is_favorite } = point;
  const dateFormated = dayjs(date_from);
  const timeFromFormated = dayjs(date_from);
  const timeToFormated = dayjs(date_to);
  const [ isFavorite, setFavorite ] = useState<boolean>(is_favorite as boolean);
  const dispatch = useAppDispatch();
  const isClicked = useAppSelector((state) => state.isClickedEdit);

  const offersFromServer = getOffersByPoint(pointOffers, offers as number[]);

  const handleOnClick = () => {
    dispatch(setClickedEdit(true));
    dispatch(setActivePoint(id as string));
    dispatch(setClickedAddNewButton(false));
    dispatch(setActiveOffers(offers as number[]));
  };

  const handleIsFavorite = () => {
    setFavorite(!isFavorite);
    const postData: Point = {
      base_price: base_price,
      date_from: date_from,
      date_to: date_from,
      destination: destination,
      is_favorite: !isFavorite,
      offers: offers,
      type: type,
      id: id,
    };
    dispatch(putEditPointAction(postData));
  };

  return (
    <>
      {isActive && isClicked ? (
        <EditPointComponent point={point} />
      ) : (
        <li className="trip-events__item" id={id}>
          <div className="event">
            <time className="event__date" dateTime="2019-03-18">
              {dateFormated.format('MMM DD')}
            </time>
            <div className="event__type">
              <img
                className="event__type-icon"
                width={42}
                height={42}
                src={`img/icons/${type}.png`}
                alt="Event type icon"
              />
            </div>
            <h3 className="event__title">
              {type} {destination.name}
            </h3>
            <div className="event__schedule">
              <p className="event__time">
                <time className="event__start-time" dateTime="2019-03-18T10:30">
                  {timeFromFormated.format('HH:mm')}
                </time>
                —
                <time className="event__end-time" dateTime="2019-03-18T11:00">
                  {timeToFormated.format('HH:mm')}
                </time>
              </p>
              <p className="event__duration">
                {timeToFormated.diff(timeFromFormated, 'hour')} H
              </p>
            </div>
            <p className="event__price">
              €&nbsp;<span className="event__price-value">{base_price}</span>
            </p>
            <h4 className="visually-hidden">Offers:</h4>
            <ul className="event__selected-offers">
              {offersFromServer()?.map((offer) => offer.map((el) =>
                (
                  <li className="event__offer" key={el.id}>
                    <span className="event__offer-title">{el.title}</span>{' '}
               +€&nbsp;
                    <span className="event__offer-price">{el.price}</span>
                  </li>
                )
              )
              )}
            </ul>
            <button
              className={`event__favorite-btn ${
                isFavorite ? 'event__favorite-icon--active' : ''
              }`}
              type="button"
              onClick={handleIsFavorite}
            >
              <span className="visually-hidden">Add to favorite</span>
              <svg
                className="event__favorite-icon"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
              </svg>
            </button>
            <button
              className="event__rollup-btn"
              type="button"
              onClick={handleOnClick}
            >
              <span className="visually-hidden">Open event</span>
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default RoutePoint;
