import { Offer } from "../../types/offer";
import OfferComponent from "../offer/offer-component";

type OfferListComponentProps = {
  offer: Offer;
}

function OffersListComponent({offer}: OfferListComponentProps) {
  return(
    <div className="event__available-offers">
      <OfferComponent offer={offer}/>
    </div>
  )
}

export default OffersListComponent;
