import { Product } from "@prisma/client";
import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

export interface Props {
  products: Product[];
}

const ProductTable = ({ products }: Props) => {
  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}>
                {column.label}
              </Table.ColumnHeaderCell>
            ))}
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </Table.Cell>
              <Table.Cell>Tk {product.price}</Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {product.createdAt.toLocaleString()}
              </Table.Cell>
              <Table.Cell>
                <Button color="red">
                  <TrashIcon />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default ProductTable;

const columns: {
  label: string;
  value: keyof Product;
  className?: string;
}[] = [
  { label: "Title", value: "title" },
  { label: "Price", value: "price" },
  {
    label: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];
