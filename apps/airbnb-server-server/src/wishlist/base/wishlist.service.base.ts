/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Wishlist as PrismaWishlist,
  Listing as PrismaListing,
} from "@prisma/client";

export class WishlistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WishlistCountArgs, "select">): Promise<number> {
    return this.prisma.wishlist.count(args);
  }

  async wishlists(
    args: Prisma.WishlistFindManyArgs
  ): Promise<PrismaWishlist[]> {
    return this.prisma.wishlist.findMany(args);
  }
  async wishlist(
    args: Prisma.WishlistFindUniqueArgs
  ): Promise<PrismaWishlist | null> {
    return this.prisma.wishlist.findUnique(args);
  }
  async createWishlist(
    args: Prisma.WishlistCreateArgs
  ): Promise<PrismaWishlist> {
    return this.prisma.wishlist.create(args);
  }
  async updateWishlist(
    args: Prisma.WishlistUpdateArgs
  ): Promise<PrismaWishlist> {
    return this.prisma.wishlist.update(args);
  }
  async deleteWishlist(
    args: Prisma.WishlistDeleteArgs
  ): Promise<PrismaWishlist> {
    return this.prisma.wishlist.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaListing | null> {
    return this.prisma.wishlist
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
