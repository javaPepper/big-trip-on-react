import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { destinations, pointTypes } from "../../const";
import { useAppDispatch } from "../../hooks";
import { pointOffers } from "../../mock/point-offers";
import { setType } from "../../store/actions";
import { Point } from "../../types/point";
import EventTypeComponent from "../event-type/event-type-component";
import OfferComponent from "../offer/offer-component";
import RoutePointComponent from "../route-point-component/route-point-component";

type EditPointComponentProps = {
  point: Point;
};

function EditPointComponent({ point }: EditPointComponentProps) {
  const { basePrice, dateFrom, dateTo, destination, id, isFavorite, offers, type } = point;
  const [ startDate, setStartDate ] = useState<Date>(new Date());
  const [ endDate, setEndDate ] = useState<Date>(new Date());
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getOffers = pointOffers.filter(
    (offer) => offer.id === offers.find((el) => el === offer.id)
  );

  const handleCloseEvent = () => {
    setClosed(!isClosed)
  };

  return (
    <>
    {isClosed ?
    <RoutePointComponent point={point} isActive={id === point.id}/> :
      (<li className="trip-events__item">
      <form
      className="event event--edit"
      action="#"
      method="post">
        <header className="event__header">
          <div className="event__type-wrapper">
            <label
              className="event__type  event__type-btn"
              htmlFor="event-type-toggle-1"
            >
              <span className="visually-hidden">Choose event type</span>
              <img
                className="event__type-icon"
                width={17}
                height={17}
                src={`img/icons/${type}.png`}
                alt="Event type icon"
              />
            </label>
            <input
              className="event__type-toggle  visually-hidden"
              id="event-type-toggle-1"
              type="checkbox"
            />
           <div className="event__type-list">
              <fieldset className="event__type-group">
                <legend className="visually-hidden">Event type</legend>
                {pointTypes.map((type) => (
                  <EventTypeComponent
                    type={type}
                    key={type}
                    onClick={() => {
                      dispatch(setType(type));
                    }}
                  />
                ))}
              </fieldset>
            </div>
          </div>
          <div className="event__field-group  event__field-group--destination">
            <label
              className="event__label  event__type-output"
              htmlFor="event-destination-1"
            >
              {type}
            </label>
            <input
              className="event__input  event__input--destination"
              id="event-destination-1"
              type="text"
              name="event-destination"
              defaultValue={destination}
              list="destination-list-1"
            />
            <datalist id="destination-list-1">
              {destinations.map((point) => (
                <option value={point} key={point} />
              ))}
            </datalist>
          </div>
          <div className="event__field-group  event__field-group--time">
            <label className="visually-hidden" htmlFor="event-start-time-1">
              From
            </label>
            <DatePicker
              selected={new Date(dateFrom)}
              dateFormat="dd/MM/yy H:mm"
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              showTimeInput
              startDate={new Date(dateFrom)}
              endDate={new Date(dateTo)}
              minDate={new Date()}
            ></DatePicker>
            —
            <label className="visually-hidden" htmlFor="event-end-time-1">
              To
            </label>
            <DatePicker
              selected={new Date(dateTo)}
              dateFormat="dd/MM/yy H:mm"
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              showTimeInput
              startDate={new Date(dateFrom)}
              endDate={new Date(dateTo)}
              minDate={new Date(dateFrom)}
            ></DatePicker>
          </div>
          <div className="event__field-group  event__field-group--price">
            <label className="event__label" htmlFor="event-price-1">
              <span className="visually-hidden">Price</span>€
            </label>
            <input
              className="event__input  event__input--price"
              id="event-price-1"
              type="text"
              name="event-price"
              defaultValue={basePrice}
            />
          </div>
          <button className="event__save-btn  btn  btn--blue" type="submit">
            Save
          </button>
          <button className="event__reset-btn" type="reset">
            Delete
          </button>
          <button className="event__rollup-btn" type="button" onClick={handleCloseEvent}>
            <span className="visually-hidden">Open event</span>
          </button>
        </header>
        <section className="event__details">
          <section className="event__section  event__section--offers">
            <h3 className="event__section-title  event__section-title--offers">
              Offers
            </h3>
            <div className="event__available-offers">
              {getOffers.map((offer) =>
              <OfferComponent
              offer={offer}
              key={offer.id}
              />)}
            </div>
          </section>
          <section className="event__section  event__section--destination">
            <h3 className="event__section-title  event__section-title--destination">
              Destination
            </h3>
            <p className="event__destination-description">
              Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort
              area near the junction of France, Switzerland and Italy. At the
              base of Mont Blanc, the highest summit in the Alps, it's renowned
              for its skiing.
            </p>
          </section>
        </section>
      </form>
    </li>)}
    </>
  );
}

export default EditPointComponent;
