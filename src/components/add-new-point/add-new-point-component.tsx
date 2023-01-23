import { pointTypes } from "../../const";
import EventTypeComponent from "../event-type/event-type-component";
import { useState, useEffect, FormEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OfferComponent from "../offer/offer-component";
import DestinationComponent from "../destination/destination-component";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setClickedButton, setDataDestinationsLoading } from "../../store/actions";
import { fetchDestinationsAction, fetchOffersAction, postNewPointAction } from "../../store/api-actions";
import { getDestinationsNames } from '../../utils'
import { Point } from "../../types/point";
import { Destination } from "../../types/destination";

function AddNewPointComponent() {
  const [ startDate, setStartDate ] = useState<Date>(new Date());
  const [ endDate, setEndDate ] = useState<Date>(new Date());
  const [ priceValue, setPrice ] = useState<number>(0);
  const [ destinationValue, setDestination ] = useState<string>('');
  const [ destinationObject, setDestinationObject ] = useState<Destination>({
    description: "",
    name: "",
    pictures: [{
      src: "",
      description: ""
    }]
  })
  const [ typeValue, setType ] = useState<string>("flight");
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const activeOffers = useAppSelector((state) => state.activeOffers);
  const isClosedNewPoint = useAppSelector((state) => state.isClosed);

  const handleOnClick = () => {
    setClosed(!isClosed);
    dispatch(setClickedButton(false));
  };

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const postData: Point = {
      base_price: priceValue,
      date_from: startDate.toJSON(),
      date_to: endDate.toJSON(),
      destination: destinationObject,
      is_favorite: false,
      offers: activeOffers,
      type: typeValue,
    };
      dispatch(postNewPointAction(postData));
  };

  useEffect(() => {
    dispatch(fetchDestinationsAction());
    dispatch(setDataDestinationsLoading(true));
    dispatch(fetchOffersAction());
    if(destinationValue) {
      setDestinationObject({
        ...destinationObject,
        description: destination.description,
        name: destination.name,
        pictures: destination.pictures,
      });
    }
  }, [dispatch, destinationValue]);

  const offersByType = useAppSelector((state) => state.offers);
  const theOffers = offersByType.find((offer) => offer.type === typeValue)?.offers;

  const destinations = useAppSelector((state) => state.destinations);
  const destNames = getDestinationsNames([...destinations]);

  const destinationByClick = [...destinations].filter(
    (el) => el.name === destinationValue);
  const [ destination ] = destinationByClick;

  return (
    <>
      {!isClosedNewPoint ?
      (!isClosed && (
        <li className="trip-events__item">
          <form className="event event--edit" action="#" method="post" onSubmit={handleOnSubmit}>
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
                    const { value } = evt.currentTarget;
                      if(value) {
                      setDestination(value);
                    }}}
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
                    const { value } = evt.currentTarget;
                    setPrice(+value);
                  }}
                />
              </div>
              <button
              className="event__save-btn  btn  btn--blue"
              type="submit"
              >
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
              {theOffers?.length !== 0 && (
                <section className="event__section  event__section--offers">
                  <h3 className="event__section-title  event__section-title--offers">
                    Offers
                  </h3>
                  <div className="event__available-offers">
                    {theOffers?.map((offer) => (
                        <OfferComponent offer={offer} key={offer.id}/>
                      ))}
                  </div>
                </section>
              )}
              {destinationValue.length > 0 && (
                <section className="event__section  event__section--destination">
                  <h3 className="event__section-title  event__section-title--destination">
                    Destination
                  </h3>
                {destinations.length > 0 &&
                <DestinationComponent destination={destination}/>}
                </section>
              )}
            </section>
          </form>
        </li>
      )) :
      <></>}
    </>
  );
}

export default AddNewPointComponent;
