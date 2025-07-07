import { JsonValue } from "type-fest";
import { Listing } from "../listing/Listing";

export type Wishlist = {
  createdAt: Date;
  id: string;
  tripinfo: JsonValue;
  updatedAt: Date;
  user?: Listing | null;
};
