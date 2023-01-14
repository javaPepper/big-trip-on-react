import { pointTypes } from "../../const";
import EventTypeComponent from "../event-type/event-type-component";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OfferComponent from "../offer/offer-component";
import DestinationComponent from "../destination/destination-component";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setClickedButton, setDataDestinationsLoading } from "../../store/actions";
import { fetchDestinationsAction, fetchOffersAction } from "../../store/api-actions";
import { getDestinationsNames } from '../../utils'

function AddNewPointComponent() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [priceValue, setPrice] = useState<string>('');
  const [destinationValue, setDestination] = useState<string>('');
  const [typeValue, setType] = useState<string>("flight");
  const [isClosed, setClosed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOnClick = () => {
    setClosed(!isClosed);
    dispatch(setClickedButton(false));
  };

  useEffect(() => {
    dispatch(fetchDestinationsAction());
    dispatch(setDataDestinationsLoading(true));
    dispatch(fetchOffersAction());
  }, [dispatch]);

  const offersByType = useAppSelector((state) => state.offers);
  const offers = offersByType.find((offer) => offer.type === typeValue)?.offers;

  const destinations = useAppSelector((state) => state.destinations);
  const destNames = getDestinationsNames([...destinations]);

  const destinationByClick = [...destinations].filter(
    (el) => el.name === destinationValue);
  const [destinationPics] = destinationByClick;

  return (
    <>
      {!isClosed && (
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
                    src={`img/icons/${typeValue}.png`}
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
                  placeholder="Enter your destination"
                  list="destination-list-1"
                  onChange={(evt) => {
                    if (evt.currentTarget.value !== '') {
                      setDestination(evt.currentTarget.value);
                    }
                  }}
                />
                <datalist id="destination-list-1">
                  {destNames().map((name) => (
                    <option value={name} key={name} />
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
              <button
                className="event__reset-btn"
                type="reset"
                onClick={handleOnClick}
              >
                Cancel
              </button>
            </header>
            <section className="event__details">
              {offers?.length !== 0 && (
                <section className="event__section  event__section--offers">
                  <h3 className="event__section-title  event__section-title--offers">
                    Offers
                  </h3>
                  <div className="event__available-offers">
                    {typeValue &&
                      offers?.map((offer) => (
                        <OfferComponent offer={offer} key={offer.id} />
                      ))}
                  </div>
                </section>
              )}
              {destinationValue.length > 0 && (
                <section className="event__section  event__section--destination">
                  <h3 className="event__section-title  event__section-title--destination">
                    Destination
                  </h3>
                 <DestinationComponent destination={destinationPics}/>
                </section>
              )}
            </section>
          </form>
        </li>
      )}
    </>
  );
}

export default AddNewPointComponent;
