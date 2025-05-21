import { TContactEmailPayload } from "@/types/globalTypes";

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
export const sendEmail = async (data: TContactEmailPayload): Promise<any> => {
  // console.log("Data in Service:", data);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/auth/send-mail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();
  return result;
};

export const getSpecificProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${id}`
    );

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
