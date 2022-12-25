import { pointType } from "../../const";
import EventTypeComponent from "../event-type/event-type-component";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddNewPointComponent() {
  const [ type, setType ] = useState<string>('Flight');
  const [ isOpened, setOpened ] = useState<boolean>(false);
  const [ startDate, setStartDate ] = useState<Date>(new Date());
  const [ endDate, setEndDate ] = useState<Date>(new Date());

  const handleIsOpened = () => {
    setOpened(!isOpened);
  }

  return(
  <li className="trip-events__item">
  <form className="event event--edit" action="#" method="post" >
    <header className="event__header">
      <div className="event__type-wrapper" >
        <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
          <span className="visually-hidden">Choose event type</span>
          <img className="event__type-icon"
          width={17} height={17}
          src={`img/icons/${type}.png`}
          alt="Event type icon" />
        </label>
        <input className="event__type-toggle  visually-hidden"
        id="event-type-toggle-1"
        type="checkbox"
        onChange={handleIsOpened}/>
        <div className="event__type-list" >
         {isOpened && <fieldset className="event__type-group" >
            <legend className="visually-hidden">Event type</legend>
            {pointType.map((type) => <EventTypeComponent type={type} key={type} onClick={
              () => {
                setType(type)
                }}
              />
            )}
          </fieldset>}
        </div>
      </div>
      <div className="event__field-group  event__field-group--destination">
        <label className="event__label  event__type-output" htmlFor="event-destination-1">
          {type}
        </label>
        <input className="event__input  event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        defaultValue="Geneva"
        list="destination-list-1" />
        <datalist id="destination-list-1">
          <option value="Amsterdam" />
          <option value="Geneva" />
          <option value="Chamonix" />
        </datalist>
      </div>
      <div className="event__field-group  event__field-group--time" >
        <label className="visually-hidden" htmlFor="event-start-time-1">From</label>
        <DatePicker
          selected={startDate}
          dateFormat='dd/MM/yy H:mm'
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          showTimeInput
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
        >
        </DatePicker>
        —
        <label className="visually-hidden" htmlFor="event-end-time-1">To</label>
        <DatePicker
          selected={endDate}
          dateFormat='dd/MM/yy H:mm'
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          showTimeInput
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        >
        </DatePicker>
      </div>
      <div className="event__field-group  event__field-group--price">
        <label className="event__label" htmlFor="event-price-1">
          <span className="visually-hidden">Price</span>
          €
        </label>
        <input className="event__input  event__input--price"
        id="event-price-1"
        type="text"
        name="event-price"
        defaultValue='' />
      </div>
      <button className="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button className="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section className="event__details">
      <section className="event__section  event__section--offers">
        <h3 className="event__section-title  event__section-title--offers">Offers</h3>
        <div className="event__available-offers">
          <div className="event__offer-selector">
            <input className="event__offer-checkbox  visually-hidden"
            id="event-offer-luggage-1"
            type="checkbox"
            name="event-offer-luggage"
            defaultChecked />
            <label className="event__offer-label" htmlFor="event-offer-luggage-1">
              <span className="event__offer-title">Add luggage</span>
              +€&nbsp;
              <span className="event__offer-price">30</span>
            </label>
          </div>
          <div className="event__offer-selector">
            <input className="event__offer-checkbox  visually-hidden"
            id="event-offer-comfort-1"
            type="checkbox"
            name="event-offer-comfort"
            defaultChecked />
            <label className="event__offer-label" htmlFor="event-offer-comfort-1">
              <span className="event__offer-title">Switch to comfort class</span>
              +€&nbsp;
              <span className="event__offer-price">100</span>
            </label>
          </div>
          <div className="event__offer-selector">
            <input className="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal" />
            <label className="event__offer-label" htmlFor="event-offer-meal-1">
              <span className="event__offer-title">Add meal</span>
              +€&nbsp;
              <span className="event__offer-price">15</span>
            </label>
          </div>
          <div className="event__offer-selector">
            <input className="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats" />
            <label className="event__offer-label" htmlFor="event-offer-seats-1">
              <span className="event__offer-title">Choose seats</span>
              +€&nbsp;
              <span className="event__offer-price">5</span>
            </label>
          </div>
          <div className="event__offer-selector">
            <input className="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train" />
            <label className="event__offer-label" htmlFor="event-offer-train-1">
              <span className="event__offer-title">Travel by train</span>
              +€&nbsp;
              <span className="event__offer-price">40</span>
            </label>
          </div>
        </div>
      </section>
      <section className="event__section  event__section--destination">
        <h3 className="event__section-title  event__section-title--destination">Destination</h3>
        <p className="event__destination-description">
          Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva).
          Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
        <div className="event__photos-container">
          <div className="event__photos-tape">
            <img className="event__photo" src="img/photos/1.jpg" alt="Event photo" />
            <img className="event__photo" src="img/photos/2.jpg" alt="Event photo" />
            <img className="event__photo" src="img/photos/3.jpg" alt="Event photo" />
            <img className="event__photo" src="img/photos/4.jpg" alt="Event photo" />
            <img className="event__photo" src="img/photos/5.jpg" alt="Event photo" />
          </div>
        </div>
      </section>
    </section>
  </form>
 </li>
  )
}

export default AddNewPointComponent;
