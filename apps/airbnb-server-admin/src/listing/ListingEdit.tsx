import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ListingTitle } from "./ListingTitle";
import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ListingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="Listing"
          label="listingCreatedBy"
        >
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="listings" reference="Listing">
          <SelectArrayInput
            optionText={ListingTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <div />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
        <NumberInput label="price" source="price" />
        <TextInput label="title" source="title" />
        <ReferenceInput
          source="wishlists.id"
          reference="Wishlist"
          label="wishlists"
        >
          <SelectInput optionText={WishlistTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
