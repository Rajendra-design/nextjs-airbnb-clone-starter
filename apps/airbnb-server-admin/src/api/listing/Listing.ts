import { JsonValue } from "type-fest";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: Listing;
  listings?: Array<Listing>;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photo: JsonValue;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  updatedAt: Date;
  wishlists?: Wishlist | null;
};
