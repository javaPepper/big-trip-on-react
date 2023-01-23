import { useAppSelector } from "../../hooks";
import OfferComponent from "../offer/offer-component";

type OfferListComponentProps = {
  offers: number[];
}

function OffersListComponent({ offers}: OfferListComponentProps) {
  const pointOffers = useAppSelector((state) => state.offers);
  const offersByClick = [...pointOffers].find((offer) => offer.type === offer.type)?.offers;

  return(
    <div className="event__available-offers">
      {offers.map((el) => offersByClick?.map((offer) => <OfferComponent offer={offer} key={offer.id} isChecked={offer.id === el}/>))}
    </div>
  )
}

export default OffersListComponent;
