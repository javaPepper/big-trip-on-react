import { useAppDispatch, useAppSelector } from "../../hooks";
import { setClickedButton } from "../../store/actions";
import FilterList from "../filter-list/filter-list";

type HeaderComponentProps = {
  totalPrice: number;
}

function HeaderComponent({ totalPrice }: HeaderComponentProps) {
  const dispatch = useAppDispatch();
  const isClickedHeader = useAppSelector((state) => state.isClickedHeader);

  const handleNewPointButton = () => {
    dispatch(setClickedButton(true));
  };

  return (
    <header className="page-header">
      <div className="page-body__container  page-header__container">
        <img
          className="page-header__logo"
          src="img/logo.png"
          width={42}
          height={42}
          alt="Trip logo"
        />
        <div className="trip-main">
          <section className="trip-main__trip-info  trip-info">
            <div className="trip-info__main">
              <h1 className="trip-info__title">
                Amsterdam — Chamonix — Geneva
              </h1>
              <p className="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
            </div>
            <p className="trip-info__cost">
              Total: €&nbsp;<span className="trip-info__cost-value">{totalPrice}</span>
            </p>
          </section>
          <div className="trip-main__trip-controls  trip-controls">
            <div className="trip-controls__filters">
              <h2 className="visually-hidden">Filter events</h2>
              <form className="trip-filters" action="#" method="get">
                <FilterList/>
                <button className="visually-hidden" type="submit">
                  Accept filter
                </button>
              </form>
            </div>
          </div>
          <button
            className="trip-main__event-add-btn  btn  btn--big  btn--yellow"
            type="button"
            disabled={isClickedHeader}
            onClick={handleNewPointButton}
          >
            New event
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
