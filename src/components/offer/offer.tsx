import { Offer } from '../../types/offer';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveOffers } from '../../store/actions';

type OfferComponentProps = {
  offer: Offer;
  isChecked?: boolean;
  offers?: number[];
}

function OfferComponent({ offer, isChecked, offers }: OfferComponentProps) {
  const { id, title, price } = offer;
  const [ isActive, setActive ] = useState<boolean>(false);
  const activeOffers = useAppSelector((state) => state.activeOffers);
  offers = activeOffers;
  const dispatch = useAppDispatch();

  return (
    <div className="event__offer-selector" >
      <input
        className="event__offer-checkbox  visually-hidden"
        id={`event-offer-${id}`}
        type="checkbox"
        name="event-offer"
        checked={isChecked || isActive}
        value={id}
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          setActive(!isActive);
          (!isActive && !(offers?.includes(+value) ?? false)) ?
            dispatch(setActiveOffers([...offers as number[], +value])) :
            dispatch(setActiveOffers([...offers as number[]].filter((el) => el !== id)));
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
