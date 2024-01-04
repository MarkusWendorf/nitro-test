import { writeFileSync } from "fs";

export default eventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const image = formData.find((part) => part.name == "image" && part.filename);

  if (!image) {
    setResponseStatus(event, 400);
    return;
  }

  writeFileSync("./uploads/" + image.filename, image.data);

  return { nitro: "Is Awesome!" };
});
