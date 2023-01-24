import { useState, useEffect, FormEvent } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { pointTypes } from "../../const";
import { Point } from "../../types/point";
import EventTypeComponent from "../event-type/event-type-component";
import OfferComponent from "../offer/offer-component";
import RoutePointComponent from "../route-point-component/route-point-component";
import DestinationComponent from "../destination/destination-component";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getDestinationsNames, getTotalPrice } from "../../utils";
import { deletePointAction, fetchDestinationsAction, fetchOffersAction, fetchPointsAction, postEditPointAction } from "../../store/api-actions";
import { setActiveOffers, setPointsPrice } from "../../store/actions";

type EditPointComponentProps = {
  point: Point;
};

function EditPointComponent({ point }: EditPointComponentProps) {
  const { base_price, date_from, date_to, destination, id, offers, type } = point;
  const [ startDate, setStartDate ] = useState<Date>(new Date(date_from));
  const [ endDate, setEndDate ] = useState<Date>(new Date(date_to));
  const [ isClosed, setClosed ] = useState<boolean>(false);
  const [ destinationValue, setDestination ] = useState<string>(destination.name);
  const [ priceValue, setPrice ] = useState<number>(base_price);
  const [ typeValue, setType ] = useState<string>(type);
  const [ isClickedType, setClickedType ] = useState<boolean>(false);

  const points = useAppSelector((state) => state.points);

  const pointOffers = useAppSelector((state) => state.offers);
  let activeOffers = useAppSelector((state) => state.activeOffers);
  const isDeleted = useAppSelector((state) => state.isDeleted);
  const isClosedAfterEdit = useAppSelector((state) => state.isClosed);
  const dispatch = useAppDispatch();

  const handleCloseEvent = () => {
    setClosed(!isClosed);
    dispatch(setActiveOffers([]));
  };

  const handleOnReset = () => {
    dispatch(deletePointAction(id!));
    dispatch(fetchPointsAction());
    dispatch(fetchOffersAction());
    dispatch(setPointsPrice(getTotalPrice(points)));
  };

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const postData: Point = {
      base_price: priceValue,
      date_from: startDate.toJSON(),
      date_to: endDate.toJSON(),
      destination: destinationFromServer,
      is_favorite: false,
      offers: activeOffers.concat(offers),
      type: typeValue,
      id: id,
    };
      dispatch(postEditPointAction(postData));
  };

  useEffect(() => {
    dispatch(fetchDestinationsAction());
  }, [dispatch, destinationValue])

  const destinations = useAppSelector((state) => state.destinations);
  const destNames = getDestinationsNames([...destinations]);

  const destinationByClick = [...destinations]
  .filter((el) => el.name === destinationValue);
  const [ destinationFromServer ] = destinationByClick;

  const offersByClick = [...pointOffers].find((offer) => offer.type === typeValue)?.offers;

  return (
    <>
      {isClosed  || isClosedAfterEdit ? (
        <RoutePointComponent point={point} isActive={id === point.id} pointOffers={offersByClick!}/>
      ) : ( isDeleted ? null :
        <li className="trip-events__item">
          <form className="event event--edit" action="#" method="post"
            onSubmit={handleOnSubmit} onReset={handleOnReset}>
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
                    src={`img/icons/${typeValue }.png`}
                    alt="Event type icon"
                  />
                </label>
                <input
                  className="event__type-toggle  visually-hidden"
                  id="event-type-toggle-1"
                  type="checkbox"
                  onChange={
                    () => setClickedType(!isClickedType)}
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
                  defaultValue={destination.name}
                  list="destination-list-1"
                  onChange={(evt) => {
                    const { value } = evt.currentTarget;
                    if(value) {
                      setDestination(value)
                      }
                    }
                  }
                />
                <datalist id="destination-list-1">
                  {destNames().map((name) => (
                    <option value={name} key={name}/>
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
                  defaultValue={base_price}
                  onChange={(evt) => {
                    evt.preventDefault();
                    const { value } = evt.currentTarget;
                    setPrice(+value);
                  }}
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
                  {isClickedType ?
                  offersByClick?.map((offer) =>
                  <OfferComponent offer={offer} key={offer.id}
                  isChecked={false}
                  />)
                  :
                  offersByClick?.map((offer) =>
                  <OfferComponent offer={offer} key={offer.id}
                  isChecked={offers.includes(offer.id)}
                  />)
                  }
                </div>
              </section>}
             {destinationValue.length > 0 &&
             <section className="event__section  event__section--destination">
                <h3 className="event__section-title  event__section-title--destination">
                  Destination
                </h3>
                {destinations.length > 0 &&
                <DestinationComponent destination={destinationFromServer}/>}
              </section>}
            </section>
          </form>
        </li>
      )}
    </>
  );
}

export default EditPointComponent;
