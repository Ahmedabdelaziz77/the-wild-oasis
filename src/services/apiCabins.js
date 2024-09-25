import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins throw an error");
  }
  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImage = newCabin?.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");
  //a- create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //b-edit
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  //get data
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin can't be created");
  }
  if (hasImage) return data; //no need to upload image
  //2-upload image to storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //3- delete the cabin if there was an error uploaing image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Error uploading image", storageError);
    throw new Error("Error uploading image the cabin was deleted");
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin can't be deleted");
  }
  return data;
}
