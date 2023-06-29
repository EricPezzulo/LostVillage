import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({ take: 50 });
    // console.log(products);
    // const users = (
    //   await clerkClient.users.getUserList({
    //     userId: reviews.map((review) => review.authorId),
    //     limit: 50,
    //   })
    // ).map(filterUserForClient);
    // console.log(users);
    // return reviews.map((review) => {
    //   const author = users.find((user) => user.id === review.authorId);
    //   if (!author)
    //     throw new TRPCError({
    //       code: "INTERNAL_SERVER_ERROR",
    //       message: "Author for review not found",
    //     });
    //   return {
    //     review,
    //     author,
    //   };
    // });
    return { products };
  }),
});
