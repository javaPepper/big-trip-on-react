import AddNewPointComponent from "../../components/add-new-point/add-new-point-component";
import HeaderComponent from "../../components/header/header";
import PointComponent from "../../components/point-component/point-component";
import SortComponent from "../../components/sort-component/sort-component";
import { SortingValues } from "../../const";
import { useAppSelector } from "../../hooks";
import { point } from "../../mock/point";

function MainPage() {
  const isClicked = useAppSelector((state) => state.isClicked);

  return(
    <>
 <HeaderComponent/>
    <main className="page-body__page-main  page-main">
  <div className="page-body__container">
    <section className="trip-events">
      <h2 className="visually-hidden">Trip events</h2>
      <form className="trip-events__trip-sort  trip-sort" action="#" method="get">
         {<SortComponent sortValue={Object.values(SortingValues)}/>}
      </form>
      <ul className="trip-events__list">
        {isClicked && <AddNewPointComponent/>}
       <PointComponent point={point}/>
      </ul>
    </section>
  </div>
</main>
    </>
  )
}

export default MainPage;
