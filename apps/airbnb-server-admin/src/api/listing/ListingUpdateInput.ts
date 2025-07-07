import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingUpdateManyWithoutListingsInput } from "./ListingUpdateManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingUpdateInput = {
  description?: string;
  listingCreatedBy?: ListingWhereUniqueInput;
  listings?: ListingUpdateManyWithoutListingsInput;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  photo?: InputJsonValue;
  placeAmenities?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
  price?: number;
  title?: string;
  wishlists?: WishlistWhereUniqueInput | null;
};
