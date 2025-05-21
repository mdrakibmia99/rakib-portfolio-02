/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllProject = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
