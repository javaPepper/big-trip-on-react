import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { destinations, pointTypes } from "../../const";
import { pointOffers } from "../../mock/point-offers";
import { Point } from "../../types/point";
import EventTypeComponent from "../event-type/event-type-component";
import OfferComponent from "../offer/offer-component";
import RoutePointComponent from "../route-point-component/route-point-component";
import DestinationComponent from "../destination/destination-component";
import { points } from "../../mock/points";
import { offersByType } from "../../mock/offers-by-type";
import Spinner from "../spinner/spinner";

type EditPointComponentProps = {
  point: Point;
};

function EditPointComponent({ point }: EditPointComponentProps) {
  const { base_price, date_from, date_to, destination, id, offers, type } = point;
  const [ startDate, setStartDate ] = useState<Date>(new Date());
  const [ endDate, setEndDate ] = useState<Date>(new Date());
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const [ value, setValue ] = useState<string>(destination.name);
  const [ typeValue, setType ] = useState<string>('');
  const [ isClickedType, setClickedType ] = useState<boolean>(false);

  const filteredOffers = [...pointOffers].filter(
    (offer) => offer.id === offers.find((el) => el === offer.id)
  );

  const destinationByClick = [...points].filter((el) => el.destination.name === value)
  const [ destinationPics ]  = destinationByClick;

  const offersByClick = [...offersByType].find(
    (offer) => offer.type === typeValue
  )?.offers;

  const handleCloseEvent = () => {
    setClosed(!isClosed);
  };

  return (
    <>
      {isClosed ? (
        <RoutePointComponent point={point} isActive={id === point.id} />
      ) : (
        <li className="trip-events__item">
          <form className="event event--edit" action="#" method="post">
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
                    src={`img/icons/${isClickedType ? typeValue : type}.png`}
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
                          setType(type);
                          setClickedType(true);
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
                  {typeValue}
                </label>
                <input
                  className="event__input  event__input--destination"
                  id="event-destination-1"
                  type="text"
                  name="event-destination"
                  defaultValue={destination.name}
                  list="destination-list-1"
                  onChange={(evt) => {
                    if(evt.currentTarget.value !== '') {
                      setValue(evt.currentTarget.value)
                      }
                    }
                  }
                />
                <datalist id="destination-list-1">
                  {destinations.map((point) => (
                    <option value={point} key={point}/>
                  ))}
                </datalist>
              </div>
              <div className="event__field-group  event__field-group--time">
                <label className="visually-hidden" htmlFor="event-start-time-1">
                  From
                </label>
                <DatePicker
                  selected={new Date(date_from)}
                  dateFormat="dd/MM/yy H:mm"
                  onChange={(date: Date) => setStartDate(date)}
                  selectsStart
                  showTimeInput
                  startDate={new Date(date_from)}
                  endDate={new Date(date_to)}
                  minDate={new Date()}
                ></DatePicker>
                —
                <label className="visually-hidden" htmlFor="event-end-time-1">
                  To
                </label>
                <DatePicker
                  selected={new Date(date_to)}
                  dateFormat="dd/MM/yy H:mm"
                  onChange={(date: Date) => setEndDate(date)}
                  selectsEnd
                  showTimeInput
                  startDate={new Date(date_from)}
                  endDate={new Date(date_to)}
                  minDate={new Date(date_from)}
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
                  defaultValue={base_price}
                />
              </div>
              <button className="event__save-btn  btn  btn--blue" type="submit">
                Save
              </button>
              <button className="event__reset-btn" type="reset">
                Delete
              </button>
              <button
                className="event__rollup-btn"
                type="button"
                onClick={handleCloseEvent}
              >
                <span className="visually-hidden">Open event</span>
              </button>
            </header>
            <section className="event__details">
              {offersByClick?.length !== 0 &&
              <section className="event__section  event__section--offers">
                <h3 className="event__section-title  event__section-title--offers">
                  Offers
                </h3>
                <div className="event__available-offers">
                  {(isClickedType ? typeValue : type) &&
                  (isClickedType ? offersByClick : filteredOffers)?.map((offer) => (
                    <OfferComponent offer={offer} key={offer.id} />
                  ))}
                </div>
              </section>}
              <section className="event__section  event__section--destination">
                <h3 className="event__section-title  event__section-title--destination">
                  Destination
                </h3>
                <DestinationComponent destination={destinationPics.destination}/>
              </section>
            </section>
          </form>
        </li>
      )}
    </>
  );
}

export default EditPointComponent;
