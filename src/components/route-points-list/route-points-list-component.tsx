import RoutePointComponent from '../route-point-component/route-point-component';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilteringValues, getSortingValues, getTotalPrice } from '../../utils';
import { useEffect } from 'react';
import { setDataDestinationsLoading, setPointsPrice } from '../../store/actions';
import Spinner from '../spinner/spinner';
import { fetchOffersAction, fetchPointsAction } from '../../store/api-actions';

function RoutePointsList() {
  const id = useAppSelector((state) => state.activeId);
  const points = useAppSelector((state) => state.points);
  let sortedPoints = [...points]
  .sort((a, b) => new Date(b.date_from).getTime() - new Date(a.date_from).getTime());
  const sortValue = useAppSelector((state) => state.sortValue);
  sortedPoints = getSortingValues([...sortedPoints], sortValue);
  const filterValue = useAppSelector((state) => state.filterValue);
  const filteredPoints = getFilteringValues([...sortedPoints], filterValue);
  const isFiltered = useAppSelector((state) => state.isClickedFilter);
  const dispatch = useAppDispatch();
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    dispatch(fetchPointsAction());
    dispatch(fetchOffersAction());
    dispatch(setDataDestinationsLoading(true));
    dispatch(setPointsPrice(getTotalPrice(points)));
  }, [dispatch, getTotalPrice(points)]);

  return (
    <>
       {isDataLoading && points.length > 0 ?
        (isFiltered ? filteredPoints : sortedPoints).map((point) => (
        <RoutePointComponent
          point={point}
          key={point.id}
          isActive={id === point.id}
          pointOffers={(offers.find((offer) => offer.type === point.type)?.offers)!}
        />
      ))
       :
      <Spinner/>
      }
    </>
  );
}

export default RoutePointsList;
