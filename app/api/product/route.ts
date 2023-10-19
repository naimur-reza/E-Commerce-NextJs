import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Change NextResponse<unknown> to Request
  const body = await request.json();
  const { title, price, category, image, size } = body;
  const newProduct = await prisma.product.create({
    data: {
      title,
      price,
      category,
      image,
      size,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
