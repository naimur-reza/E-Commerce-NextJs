export const uploadImage = async (image: string | Blob) => {
  const formData = new FormData();
  formData.append("image", image);
  const url = `https://api.imgbb.com/1/upload?key=f55c73443021ed1be6ed658d21091e38`;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data;
};
