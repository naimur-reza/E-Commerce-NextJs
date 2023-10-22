"use client";
import Spinner from "@/app/components/Spinner";
import { TrashIcon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const DeleteProduct = ({ productId }: { productId: string }) => {
  const [deleting, setDeleting] = useState(false);

  const router = useRouter();
  const handleDelete = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/product/" + productId);
      router.push("/");
      router.refresh();
    } catch (error) {
      setDeleting(false);
    }
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button disabled={deleting} color="red">
          {deleting ? <Spinner /> : <TrashIcon />}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Product</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This product will no longer be available and any
          existing sessions will be expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={handleDelete} variant="solid" color="red">
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteProduct;
