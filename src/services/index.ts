/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllSkill = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`);

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
