import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LISTING_TITLE_FIELD } from "./ListingTitle";
import { WISHLIST_TITLE_FIELD } from "../wishlist/WishlistTitle";

export const ListingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"listings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="listingCreatedBy"
          source="listing.id"
          reference="Listing"
        >
          <TextField source={LISTING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="locationData" source="locationData" />
        <TextField label="locationType" source="locationType" />
        <TextField label="mapData" source="mapData" />
        <TextField label="photo" source="photo" />
        <TextField label="placeAmenities " source="placeAmenities" />
        <TextField label="placeSpace" source="placeSpace" />
        <TextField label="placeType" source="placeType" />
        <TextField label="price" source="price" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="wishlists"
          source="wishlist.id"
          reference="Wishlist"
        >
          <TextField source={WISHLIST_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
