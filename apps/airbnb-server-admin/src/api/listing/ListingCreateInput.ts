import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingCreateNestedManyWithoutListingsInput } from "./ListingCreateNestedManyWithoutListingsInput";
import { InputJsonValue } from "../../types";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";

export type ListingCreateInput = {
  description: string;
  listingCreatedBy: ListingWhereUniqueInput;
  listings?: ListingCreateNestedManyWithoutListingsInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photo: InputJsonValue;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  placeType: string;
  price: number;
  title: string;
  wishlists?: WishlistWhereUniqueInput | null;
};
