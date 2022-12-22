import HeaderComponent from "../../components/header/header";
import PointComponent from "../../components/point-component/point-component";
import SortComponent from "../../components/sort-component/sort-component";
import { SortingValues } from "../../const";
import { point } from "../../mock/point";

function MainPage() {
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
       <PointComponent point={point}/>
      </ul>
    </section>
  </div>
</main>
    </>
  )
}

export default MainPage;
