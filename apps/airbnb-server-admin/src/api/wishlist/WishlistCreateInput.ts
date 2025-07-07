import { InputJsonValue } from "../../types";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistCreateInput = {
  tripinfo: InputJsonValue;
  user?: ListingWhereUniqueInput | null;
};
