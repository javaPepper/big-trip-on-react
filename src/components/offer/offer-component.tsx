import { Offer } from "../../types/offer";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { setActiveOffers } from "../../store/actions";

type OfferComponentProps = {
  offer: Offer;
  isChecked?: boolean;
  offers?: number[];
}

function OfferComponent({ offer, isChecked, offers }: OfferComponentProps) {
  const { id, title, price } = offer;
  const [ isActive, setActive ] = useState<boolean>(false);
  const [ offerId, setOfferId ] = useState<number>(id);
  const [ checkedOffers, setCheckedOffers ] = useState<number[]>(offers!);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveOffers(checkedOffers));
  }, [dispatch, checkedOffers]);

  return (
    <div className="event__offer-selector" >
      <input
        className="event__offer-checkbox  visually-hidden"
        id={`event-offer-${id}`}
        type="checkbox"
        name="event-offer"
        checked={isActive === isChecked}
        value={id}
        onChange={() => {
          setOfferId!(id);
          isActive ? setCheckedOffers(checkedOffers.filter((el) => el !== id)) :
          setCheckedOffers([...checkedOffers, offerId]);
          setActive(!isActive);
        }}
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
