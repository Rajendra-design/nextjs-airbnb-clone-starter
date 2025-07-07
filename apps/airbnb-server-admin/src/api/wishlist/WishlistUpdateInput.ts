import { InputJsonValue } from "../../types";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistUpdateInput = {
  tripinfo?: InputJsonValue;
  user?: ListingWhereUniqueInput | null;
};
