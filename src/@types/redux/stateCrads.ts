import { card } from "../Card/card";
import { Status } from "../Status";

export interface IStateCards {
  cards: card[];
  offset: number;
  status: Status;
  errorMessage: string | null;
}
