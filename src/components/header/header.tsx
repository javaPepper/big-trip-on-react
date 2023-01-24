import { useAppDispatch, useAppSelector } from "../../hooks";
import { setClickedButton } from "../../store/actions";
import FilterList from "../filter-list/filter-list";
import dayjs from "dayjs";
import { useEffect } from "react";
import { fetchPointsAction } from "../../store/api-actions";
import { memo } from "react";

type HeaderComponentProps = {
  totalPrice: number;
}

function HeaderComponent({ totalPrice }: HeaderComponentProps) {
  const dispatch = useAppDispatch();
  const isClickedHeader = useAppSelector((state) => state.isClickedHeader);
  const points = useAppSelector((state) => state.points);

  useEffect(() => {
    dispatch(fetchPointsAction());
  }, [dispatch]);

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
                {points.length > 3 &&
                `${points[0].destination.name} - ... - ${points[points.length-1].destination.name}`}
              </h1>
              <p className="trip-info__dates">
                {points.length > 0 && `${dayjs(points[0].date_from).format('DD MMM')} -
                ${dayjs(points[points.length-1].date_from).format('DD MMM')}`}
                </p>
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

export default memo(HeaderComponent, ((prevProps, nextProps) => prevProps.totalPrice === nextProps.totalPrice));
