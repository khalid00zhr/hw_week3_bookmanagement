import { z } from "zod";

export const addUserSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username is required !" }),
    password: z
      .string({ required_error: "password is required !" })
      .min(8, "password must be more than 7 Chars"),
  }),
});

export const addBooksSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "name is required !" }),
    genre: z
      .string({ required_error: "genre is required !" })
  }),
});

export const addLoanSchema = z.object({
  body: z.object({
    book_id: z.string({ required_error: "book id is required !" }),
    user_id: z.string({ required_error: "user id is required !" }),
  }),
});

export const paramSchema = z.object({
  params: z.object({
    userid: z.string(),
  }),
});

export type paramsType = z.infer<typeof paramSchema>['params'];