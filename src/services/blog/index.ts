/* eslint-disable @typescript-eslint/no-explicit-any */

export const getAllBlog = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`);

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const getSpecificBlog = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`);

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
