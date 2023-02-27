import { useAppSelector } from '../../hooks';
import { setEmptyValue } from '../../utils';

function MainPageEmpty() {
  const filterValue = useAppSelector((state) => state.filterValue);

  return(
    <>
      {<p className="trip-events__msg">{setEmptyValue(filterValue)}</p>}
    </>
  );
}

export default MainPageEmpty;
