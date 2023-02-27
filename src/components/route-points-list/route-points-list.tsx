import RoutePointComponent from '../route-point/route-point';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilteringValues, getSortingValues, getTotalPrice } from '../../utils';
import { useEffect, useMemo } from 'react';
import { setDataDestinationsLoading, setPointsPrice } from '../../store/actions';
import Spinner from '../spinner/spinner';
import { fetchOffersAction, fetchPointsAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';

function RoutePointsList() {
  const id = useAppSelector((state) => state.activeId);
  const points = useAppSelector((state) => state.points);
  let sortedPoints = [...points]
    .sort((a, b) => new Date(b.date_from).getTime() - new Date(a.date_from).getTime());
  const sortValue = useAppSelector((state) => state.sortValue);
  sortedPoints = useMemo(() => getSortingValues([...sortedPoints], sortValue), [sortValue, sortedPoints]);
  const filterValue = useAppSelector((state) => state.filterValue);
  const filteredPoints = getFilteringValues([...sortedPoints], filterValue);
  const isFiltered = useAppSelector((state) => state.isClickedFilter);
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const offers = useAppSelector((state) => state.offers);
  const totalPrice = useMemo(() => getTotalPrice(points), [points]);

  useEffect(() => {
    dispatch(fetchPointsAction());
    dispatch(fetchOffersAction());
    dispatch(setDataDestinationsLoading(true));
    dispatch(setPointsPrice(totalPrice));
  }, [dispatch, totalPrice]);

  return (
    <>
      {isDataLoading && points.length > 0 ?
        (isFiltered ? filteredPoints : sortedPoints).map((point) => (
          <RoutePointComponent
            point={point}
            key={point.id}
            isActive={id === point.id}
            pointOffers={(offers.find((offer) => offer.type === point.type)?.offers) as Offer[]}
          />
        ))
        :
        <Spinner/>}
    </>
  );
}

export default RoutePointsList;
