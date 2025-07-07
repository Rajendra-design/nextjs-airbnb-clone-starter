import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  tripinfo?: JsonFilter;
  user?: ListingWhereUniqueInput;
};
