import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingListRelationFilter } from "./ListingListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  listingCreatedBy?: ListingWhereUniqueInput;
  listings?: ListingListRelationFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  photo?: JsonFilter;
  placeAmenities?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
  price?: FloatFilter;
  title?: StringFilter;
  wishlists?: WishlistWhereUniqueInput;
};
