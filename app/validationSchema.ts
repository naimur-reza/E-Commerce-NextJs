import { Size } from "@prisma/client";
import * as z from "zod";

const productSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" }),
  price: z.number().min(1, { message: "Price must be at least 1" }),
  image: z.string().url({ message: "Image must be a valid URL" }),
  color: z.array(z.string()),
  size: z.array(z.nativeEnum(Size)),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export default productSchema;
