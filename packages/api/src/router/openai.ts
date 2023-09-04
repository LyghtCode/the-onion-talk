import { z } from "zod";

import { desc, eq, schema } from "@acme/db";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const openaiRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return ctx.db.query.post.findMany({ orderBy: desc(schema.post.id) });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return ctx.db.query.post.findFirst({
        where: eq(schema.post.id, input.id),
      });
    }),
  generarImagen: publicProcedure
    .input(z.object({ id: z.number(), texto: z.string(), titulo: z.string() }))
    .query(({ ctx, input }) => {
      console.log(input.texto);
      console.log(input.titulo);
    }),
});
