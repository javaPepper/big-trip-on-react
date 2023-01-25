import { Offer } from "../../types/offer";
import { useState } from "react";

type OfferComponentProps = {
  offer: Offer;
  isChecked?: boolean;
  setOfferId?: (id: number) => void;
}

function OfferComponent({ offer, isChecked, setOfferId }: OfferComponentProps) {
  const { id, title, price } = offer;
  const [ isActive, setActive ] = useState<boolean>(false);



  return (
    <div className="event__offer-selector" >
      <input
        className="event__offer-checkbox  visually-hidden"
        id={`event-offer-${id}`}
        type="checkbox"
        name="event-offer"
        checked={isActive !== isChecked}
        value={id}
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          setOfferId!(+value);
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
