function AddNewPointComponent() {
  return(
    <form className="event event--edit" action="#" method="post">
  <header className="event__header">
    <div className="event__type-wrapper">
      <label className="event__type  event__type-btn" htmlFor="event-type-toggle-1">
        <span className="visually-hidden">Choose event type</span>
        <img className="event__type-icon" width={17} height={17} src="img/icons/flight.png" alt="Event type icon" />
      </label>
      <input className="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" />
      <div className="event__type-list">
        <fieldset className="event__type-group">
          <legend className="visually-hidden">Event type</legend>
          <div className="event__type-item">
            <input id="event-type-taxi-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="taxi" />
            <label className="event__type-label  event__type-label--taxi" htmlFor="event-type-taxi-1">Taxi</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-bus-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="bus" />
            <label className="event__type-label  event__type-label--bus" htmlFor="event-type-bus-1">Bus</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-train-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="train" />
            <label className="event__type-label  event__type-label--train" htmlFor="event-type-train-1">Train</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-ship-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="ship" />
            <label className="event__type-label  event__type-label--ship" htmlFor="event-type-ship-1">Ship</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-drive-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="drive" />
            <label className="event__type-label  event__type-label--drive" htmlFor="event-type-drive-1">Drive</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-flight-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="flight" defaultChecked />
            <label className="event__type-label  event__type-label--flight" htmlFor="event-type-flight-1">Flight</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-check-in-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="check-in" />
            <label className="event__type-label  event__type-label--check-in" htmlFor="event-type-check-in-1">Check-in</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-sightseeing-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="sightseeing" />
            <label className="event__type-label  event__type-label--sightseeing" htmlFor="event-type-sightseeing-1">Sightseeing</label>
          </div>
          <div className="event__type-item">
            <input id="event-type-restaurant-1" className="event__type-input  visually-hidden" type="radio" name="event-type" defaultValue="restaurant" />
            <label className="event__type-label  event__type-label--restaurant" htmlFor="event-type-restaurant-1">Restaurant</label>
          </div>
        </fieldset>
      </div>
    </div>
    <div className="event__field-group  event__field-group--destination">
      <label className="event__label  event__type-output" htmlFor="event-destination-1">
        Flight
      </label>
      <input className="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" defaultValue="Geneva" list="destination-list-1" />
      <datalist id="destination-list-1">
        <option value="Amsterdam" />
        <option value="Geneva" />
        <option value="Chamonix" />
      </datalist>
    </div>
    <div className="event__field-group  event__field-group--time">
      <label className="visually-hidden" htmlFor="event-start-time-1">From</label>
      <input className="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" defaultValue="19/03/19 00:00" />
      —
      <label className="visually-hidden" htmlFor="event-end-time-1">To</label>
      <input className="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" defaultValue="19/03/19 00:00" />
    </div>
    <div className="event__field-group  event__field-group--price">
      <label className="event__label" htmlFor="event-price-1">
        <span className="visually-hidden">Price</span>
        €
      </label>
      <input className="event__input  event__input--price" id="event-price-1" type="text" name="event-price" defaultValue='' />
    </div>
    <button className="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button className="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section className="event__details">
    <section className="event__section  event__section--offers">
      <h3 className="event__section-title  event__section-title--offers">Offers</h3>
      <div className="event__available-offers">
        <div className="event__offer-selector">
          <input className="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" defaultChecked />
          <label className="event__offer-label" htmlFor="event-offer-luggage-1">
            <span className="event__offer-title">Add luggage</span>
            +€&nbsp;
            <span className="event__offer-price">30</span>
          </label>
        </div>
        <div className="event__offer-selector">
          <input className="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" defaultChecked />
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
      <p className="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
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
  )
}

export default AddNewPointComponent;
