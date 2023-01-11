import { Point } from "../../types/point";
import dayjs from "dayjs";
import { pointOffers } from "../../mock/point-offers";
import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { setActivePoint, setClickedEdit, setClickedButton } from "../../store/actions";
import EditPointComponent from "../edit-point-component/edit-point-component";

type PointComponentProps = {
  point: Point;
  isActive: boolean;
};

function RoutePointComponent({ point, isActive }: PointComponentProps) {
  const { basePrice, destination, type, offers, dateFrom, dateTo, id } = point;
  const dateFormated = dayjs(dateFrom);
  const timeFromFormated = dayjs(dateFrom);
  const timeToFormated = dayjs(dateTo);
  const [ isClicked, setClicked ] = useState<boolean>(false);
  const [ isFavorite, setFavorite ] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getOffers = pointOffers.filter(
    (offer) => offer.id === offers.find((el) => el === offer.id)
  );

  const handleOnClick = () => {
    setClicked(true);
    dispatch(setActivePoint(id));
    dispatch(setClickedEdit(true));
    dispatch(setClickedButton(false));
  };

  const handleIsFavorite = () => {
    setFavorite(!isFavorite);
  };

  return (
    <>
    {isActive && isClicked ?
    (<EditPointComponent point={point}/>) :
    (<li className="trip-events__item">
          <div className="event">
            <time className="event__date" dateTime="2019-03-18">
              {dateFormated.format("MMM d")}
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
              {type} {destination}
            </h3>
            <div className="event__schedule">
              <p className="event__time">
                <time className="event__start-time" dateTime="2019-03-18T10:30">
                  {timeFromFormated.format("HH:mm")}
                </time>
                —
                <time className="event__end-time" dateTime="2019-03-18T11:00">
                  {timeToFormated.format("HH:mm")}
                </time>
              </p>
              <p className="event__duration">
                {timeToFormated.diff(timeFromFormated, "hour")} часов
              </p>
            </div>
            <p className="event__price">
              €&nbsp;<span className="event__price-value">{basePrice}</span>
            </p>
            <h4 className="visually-hidden">Offers:</h4>
            <ul className="event__selected-offers">
              {getOffers.map((offer) => (
                <li className="event__offer" key={offer.id}>
                  <span className="event__offer-title">{offer.title}</span>{" "}
                  +€&nbsp;
                  <span className="event__offer-price">{offer.price}</span>
                </li>
              ))}
            </ul>
            <button
              className={`event__favorite-btn ${isFavorite ? 'event__favorite-icon--active' : ''}`}
              type="button"
              onClick={handleIsFavorite}
            >
              <span className="visually-hidden">Add to favorite</span>
              <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
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
        </li>)}
    </>
  );
}

export default RoutePointComponent;
