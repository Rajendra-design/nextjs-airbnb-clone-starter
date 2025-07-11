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
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";

export const WishlistList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"wishlists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="tripinfo" source="tripinfo" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="listing.id" reference="Listing">
          <TextField source={LISTING_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
