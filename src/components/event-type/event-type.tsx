import { HTMLAttributes } from 'react';

type EventTypeComponentProps = {
  type: string;
} & HTMLAttributes<HTMLElement>;

function EventTypeComponent({ type, onChange }: EventTypeComponentProps) {
  return (
    <div className="event__type-item" onChange={onChange}>
      <input
        id={`event-type-${type}-1`}
        className="event__type-input  visually-hidden"
        type="radio"
        name="event-type"
        value={type}
      />
      <label
        className={`event__type-label  event__type-label--${type}`}
        htmlFor={`event-type-${type}-1`}
      >
        {type}
      </label>
    </div>
  );
}

export default EventTypeComponent;
