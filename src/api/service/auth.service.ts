import { baseUrl } from "@/utils/lib/axios";

export const register = async (userData: Record<string, unknown>) => {
  return baseUrl.post("/auth/signup", userData);
};
