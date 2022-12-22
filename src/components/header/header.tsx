import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { setClickedButton } from '../../store/actions';

function HeaderComponent() {
  const dispatch = useAppDispatch();
  const [ isClicked, setClicked ] = useState(false);

  const handleNewPointButton = () => {
  setClicked(!isClicked);
  dispatch(setClickedButton(true));
 }

// useEffect(() => {
//   dispatch(setClickedButton(true));
// }, [dispatch]);

  return(
    <header className="page-header">
  <div className="page-body__container  page-header__container">
    <img className="page-header__logo" src="img/logo.png" width={42} height={42} alt="Trip logo" />
    <div className="trip-main">
      <section className="trip-main__trip-info  trip-info">
        <div className="trip-info__main">
          <h1 className="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
          <p className="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
        </div>
        <p className="trip-info__cost">
          Total: €&nbsp;<span className="trip-info__cost-value">1230</span>
        </p>
      </section>
      <div className="trip-main__trip-controls  trip-controls">
        <div className="trip-controls__filters">
          <h2 className="visually-hidden">Filter events</h2>
          <form className="trip-filters" action="#" method="get">
            <div className="trip-filters__filter">
              <input id="filter-everything" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" defaultValue="everything" defaultChecked />
              <label className="trip-filters__filter-label" htmlFor="filter-everything">Everything</label>
            </div>
            <div className="trip-filters__filter">
              <input id="filter-future" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" defaultValue="future" />
              <label className="trip-filters__filter-label" htmlFor="filter-future">Future</label>
            </div>
            <div className="trip-filters__filter">
              <input id="filter-past" className="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" defaultValue="past" />
              <label className="trip-filters__filter-label" htmlFor="filter-past">Past</label>
            </div>
            <button className="visually-hidden" type="submit">Accept filter</button>
          </form>
        </div>
      </div>
      <button className="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled={isClicked} onClick={handleNewPointButton}>New event</button>
    </div>
  </div>
</header>
  )
}

export default HeaderComponent;
