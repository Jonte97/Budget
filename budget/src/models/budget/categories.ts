import { Outgoing } from "./outgoings";

export interface Category {
  id: number;
  name: string;
  outgoings: Outgoing[];
}
