import { Offer } from "../../types/offer";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setActiveOffers } from "../../store/actions";

type OfferComponentProps = {
  offer: Offer;
  isChecked?: boolean;
}

function OfferComponent({ offer, isChecked }: OfferComponentProps) {
  const { id, title, price } = offer;
  const activeOffers = useAppSelector((state) => state.activeOffers);
  const dispatch = useAppDispatch();

  return (
    <div className="event__offer-selector" >
      <input
        className="event__offer-checkbox  visually-hidden"
        id={`event-offer-${id}`}
        type="checkbox"
        name="event-offer"
        checked={isChecked}
        value={id}
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          if(!([...activeOffers].includes(+value))) {
            dispatch(setActiveOffers([...activeOffers, +value]));
          }}}
      />
      <label
        className="event__offer-label"
        htmlFor={`event-offer-${id}`}
      >
        <span className="event__offer-title">{title}</span> +€&nbsp;
        <span className="event__offer-price">{price}</span>
      </label>
    </div>
  );
}

export default OfferComponent;
