import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({
      take: 100,
      include: { variants: true },
    });
    return { products };
  }),

  getProductById: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(async ({ ctx, input }) => {
      const product = await ctx.prisma.product.findUnique({
        where: {
          productId: input.productId,
        },
      });

      return product;
    }),

  getAllMensProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({
      take: 100,
      include: { variants: true },
    });
    const filterForMens = products.filter((product) =>
      product.category.includes("Men")
    );
    return { products: filterForMens };
  }),

  getProductsByQueryParams: publicProcedure
    .input(
      z.object({
        category: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { category } = input;

      let where = {};
      if (category !== "allCategories") {
        if (category === "mens") {
          where = {
            category: {
              equals: "mens",
            },
          };
        }
        if (category === "womens") {
          where = {
            category: {
              equals: "womens",
            },
          };
        }
        if (category === "kids") {
          where = {
            category: {
              equals: "kids",
            },
          };
        }
      }

      const products = await ctx.prisma.product.findMany({
        where,
        include: { variants: true },
        take: 100,
      });
      return products;
    }),
});
