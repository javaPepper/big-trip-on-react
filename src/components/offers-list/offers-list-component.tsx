import { useAppSelector } from "../../hooks";
import { Offer } from "../../types/offer";
import OfferComponent from "../offer/offer-component";

type OfferListComponentProps = {
  offer: Offer;
}

function OffersListComponent({offer}: OfferListComponentProps) {
  const activeOffers = useAppSelector((state) => state.activeOffers);
  const [offerId] = activeOffers;

  return(
    <div className="event__available-offers">
      <OfferComponent offer={offer} isActive={offer.id !== offerId}/>
    </div>
  )
}

export default OffersListComponent;
