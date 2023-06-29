import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const reviewsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const reviews = await ctx.prisma.review.findMany();

    const userId = ["cljgl7ac20000frtqxoqalien"];

    const users = await clerkClient.users.getUserList({
      userId: reviews.map((review) => review.authorId),
    });
    console.log(reviews.map((review) => review.authorId));
    console.log(users);

    return reviews;
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
  }),
});
