import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!product)
    return NextResponse.json({ error: "Invalid Product" }, { status: 401 });

  await prisma.product.delete({
    where: {
      id: product.id,
    },
  });
  return NextResponse.json({});
}
