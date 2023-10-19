"use client";

import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const FilterByPrice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const options = [
    { value: "asc", label: "Low to High" },
    { value: "desc", label: "High to Low" },
  ];
  return (
    <div>
      <Select.Root
        onValueChange={(value) => {
          const params = new URLSearchParams();
          if (searchParams.get("category"))
            params.append("category", searchParams.get("category")!);
          if (value) params.append("orderBy", value);
          const query = params.size ? "?" + params.toString() : "";
          router.push("/search" + query);
        }}>
        <Select.Trigger placeholder="Filter by price" />
        <Select.Content className="z-50">
          {options.map((option) => (
            <Select.Item key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default FilterByPrice;
