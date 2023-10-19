"use client";
import { categories } from "@/app/products/add/AddProductForm";
import { Select, SelectItem } from "@radix-ui/themes";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const FilterByCategory = () => {
  const searchParams = usePathname();
  const router = useRouter();
  return (
    <div className="mb-5">
      <Select.Root
        onValueChange={(value) => {
          const params = new URLSearchParams();
          if (value) params.append("category", value);
          //   if (searchParams.get("orderBy"))
          //     params.append("orderBy", searchParams.get("orderBy")!);
          const query = params.size ? "?" + params.toString() : "";
          router.push("/search" + query);
        }}>
        <Select.Trigger placeholder="Filter by category..." />
        <Select.Content>
          <Select.Item value="">All</Select.Item>
          {categories.map((category) => (
            <Select.Item key={category.value} value={category.value}>
              {category.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default FilterByCategory;
