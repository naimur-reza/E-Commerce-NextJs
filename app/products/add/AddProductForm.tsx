"use client";
import { Button, Card, Flex, Heading, TextField } from "@radix-ui/themes";
import { Category, Product, Size } from "@prisma/client";
import React, { useState } from "react";
import Select, { ActionMeta, MultiValue } from "react-select";
import { Select as RadixSelects } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/app/utils/uploadImage";
import Spinner from "@/app/components/Spinner";
import prisma from "@/prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ProductProps {
  product: Product;
}

interface OptionType {
  label: string;
  value: Size;
}

const sizes: OptionType[] = [
  { label: "S", value: "S" },
  { label: "L", value: "L" },
  { label: "XS", value: "XS" },
  { label: "XL", value: "XL" },
  { label: "XXL", value: "XXL" },
  { label: "XXXL", value: "XXXL" },
];

export const categories: { label: string; value: Category }[] = [
  { label: "Shirts", value: "SHIRTS" },
  { label: "Pants", value: "PANTS" },
  { label: "Shoes", value: "SHOES" },
  { label: "Jackets", value: "JACKETS" },
  { label: "Kids", value: "KIDS" },
];

const AddProductForm = () => {
  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState({});
  const handleSelectedOptionsChange = (
    newValue: MultiValue<OptionType>,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSelectedOptions(newValue as OptionType[]);
    newValue;
    const totalOptions = newValue.map((option) => option.value);
    setOptions(totalOptions);
  };

  // form submit
  const { handleSubmit, register, setError } = useForm();
  const router = useRouter();
  const onsubmit = async (data: any) => {
    const newData = { ...data, size: options, category: selectedCategory };

    setLoading(true);
    await uploadImage(image).then(async (res) => {
      newData.image = res.data.display_url;
      await axios
        .post("/api/product", newData)
        .then((res) => {
          res;
          router.push("/");
        })
        .catch((err) => {
          err;
          setLoading(false);
        });
    });

    newData;
  };

  return (
    <div className="max-w-xl  mx-auto space-y-5">
      <Heading>Add a new product</Heading>
      <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
        <TextField.Root>
          <TextField.Input
            {...register("title")}
            placeholder="Product title..."
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input
            {...register("price", { valueAsNumber: true })}
            type="number"
            placeholder="Price..."
          />
        </TextField.Root>
        <Card>
          <TextField.Root>
            <TextField.Input
              variant="soft"
              onChange={(e: any) => setImage(e.target.files[0])}
              type="file"
              placeholder="Upload your image..."
            />
          </TextField.Root>
        </Card>
        <Select
          isMulti
          options={sizes}
          placeholder="Select sizes"
          backspaceRemovesValue={true}
          onChange={handleSelectedOptionsChange}
          value={selectedOptions}
        />
        <Flex justify="between">
          <RadixSelects.Root
            onValueChange={(value) => setSelectedCategory(value)}>
            <RadixSelects.Trigger placeholder="Select category" />
            <RadixSelects.Content>
              {categories.map((category) => (
                <RadixSelects.Item key={category.value} value={category.value}>
                  {category.label}
                </RadixSelects.Item>
              ))}
            </RadixSelects.Content>
          </RadixSelects.Root>
          <Button type="submit" disabled={loading}>
            Submit this product {loading && <Spinner />}
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default AddProductForm;
