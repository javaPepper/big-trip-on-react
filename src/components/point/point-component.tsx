import { destinations, pointTypes } from "../../const";
import EventTypeComponent from "../event-type/event-type-component";
import { useState, FormEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OfferComponent from "../offer/offer-component";
import { offersByType } from "../../mock/offers-by-type";
import { Point } from "../../types/point";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setType } from "../../store/actions";

function PointComponent() {
  const [ startDate, setStartDate ] = useState<Date>(new Date());
  const [ endDate, setEndDate ] = useState<Date>(new Date());
  const [ priceValue, setPrice ] = useState<string>("");
  const [ destinationValue, setDestination ] = useState<string>("");
  const [ ids, setIds ] = useState<number[]>([]);
  const isClickedEdit = useAppSelector((state) => state.isClickedEdit);
  const [...rest] = offersByType;
  const type = useAppSelector((state) => state.type);
  const dispatch = useAppDispatch();

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const point: Point = {
      basePrice: +priceValue,
      dateFrom: dayjs(startDate).format("MMM D"),
      dateTo: dayjs(endDate).format("MMM D"),
      destination: destinationValue,
      isFavorite: false,
      offers: Array.from(new Set(ids)),
      type: type,
    };
    return point;
  };

  return (
    <li className="trip-events__item">
      <form
        className="event event--edit"
        action="#"
        method="post"
        onSubmit={handleOnSubmit}
      >
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
              placeholder="Enter your destination"
              list="destination-list-1"
              onChange={(evt) => {
                evt.preventDefault();
                setDestination(evt.currentTarget.value);
              }}
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
              selected={startDate}
              dateFormat="dd/MM/yy H:mm"
              onChange={(date: Date) => setStartDate(date)}
              selectsStart
              showTimeInput
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
            ></DatePicker>
            —
            <label className="visually-hidden" htmlFor="event-end-time-1">
              To
            </label>
            <DatePicker
              selected={endDate}
              dateFormat="dd/MM/yy H:mm"
              onChange={(date: Date) => setEndDate(date)}
              selectsEnd
              showTimeInput
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
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
              defaultValue=""
              onChange={(evt) => {
                evt.preventDefault();
                setPrice(evt.currentTarget.value);
              }}
            />
          </div>
          <button className="event__save-btn  btn  btn--blue" type="submit">
            Save
          </button>
          {isClickedEdit ? (
            <button className="event__reset-btn" type="reset">
              Delete
            </button>
          ) : (
            <button className="event__reset-btn" type="reset">
              Cancel
            </button>
          )}

          {isClickedEdit && (
            <button className="event__rollup-btn" type="button">
              <span className="visually-hidden">Open event</span>
            </button>
          )}
        </header>
        <section className="event__details">
          <section className="event__section  event__section--offers">
            <h3 className="event__section-title  event__section-title--offers">
              Offers
            </h3>
            <div className="event__available-offers">
              {/* {type && */}
                {(rest.find((offer) => offer.type === type))?.offers.map((offer) => (
                  <OfferComponent
                    offer={offer}
                    key={offer.id}
                    onChange={() => {
                      setIds([...ids, offer.id]);
                    }}
                  />
                ))}
                {/* } */}
            </div>
          </section>
          <section className="event__section  event__section--destination">
            <h3 className="event__section-title  event__section-title--destination">
              Destination
            </h3>
            <p className="event__destination-description">
              Geneva is a city in Switzerland that lies at the southern tip of
              expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura
              mountains, the city has views of dramatic Mont Blanc.
            </p>
            <div className="event__photos-container">
              <div className="event__photos-tape">
                <img
                  className="event__photo"
                  src="img/photos/1.jpg"
                  alt="Event photo"
                />
                <img
                  className="event__photo"
                  src="img/photos/2.jpg"
                  alt="Event photo"
                />
                <img
                  className="event__photo"
                  src="img/photos/3.jpg"
                  alt="Event photo"
                />
                <img
                  className="event__photo"
                  src="img/photos/4.jpg"
                  alt="Event photo"
                />
                <img
                  className="event__photo"
                  src="img/photos/5.jpg"
                  alt="Event photo"
                />
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>
  );
}

export default PointComponent;
