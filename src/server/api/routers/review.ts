import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const reviewsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const reviews = await ctx.prisma.review.findMany();

    const users = (
      await clerkClient.users.getUserList({
        userId: reviews.map((review) => review.authorId),
      })
    ).map(filterUserForClient);

    return reviews.map((review) => {
      const author = users.find((user) => user.id === review.authorId);
      if (!author)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author for review not found",
        });
      return {
        review,
        author,
      };
    });
  }),
  getReviewsByProductId: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(async ({ ctx, input }) => {
      const reviews = await ctx.prisma.review.findMany({
        where: {
          productReviewId: input.productId,
        },
      });

      return reviews;
    }),

  getReviewById: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(async ({ ctx, input }) => {
      const reviews = await ctx.prisma.review.findUnique({
        where: {
          id: input.productId,
        },
      });

      return reviews;
    }),
});

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};
