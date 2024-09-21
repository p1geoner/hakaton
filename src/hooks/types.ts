export type TEventTypes = 'registration' | 'authorization';

export type TRegStatuses =
  | 'registration-success'
  | 'registration-fail'
  | 'registration-already';

export type TAuthStatuses = 'authentication-success' | 'authentication-fail';

export type TEventStatus<EventType> = EventType extends 'registration'
  ? TRegStatuses
  : TAuthStatuses;
