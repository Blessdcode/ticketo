/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

type ServiceFn<Q, I, R> = (query: Q, id?: I) => Promise<R>;

interface UseRequestOptions<T> {
  onSuccess?: (data: T, message: string) => void;
  onError?: (message: string) => void;
}

interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
  message: string;
}

export function useRequest<Q, I, T>(
  service: ServiceFn<Q, I, { data: ApiResponse<T> }>,
  id: I
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const queryFn = useCallback(
    async (query: Q, options: UseRequestOptions<T> = {}) => {
      const { onSuccess = () => {}, onError = () => {} } = options;

      setLoading(true);
      setData(null);
      setError("");

      try {
        const response = await service(query, id);
        setLoading(false);

        const { status, data, message } = response.data;

        if (status === "error") {
          setError(message);
          onError(message);
        } else {
          setData(data);
          onSuccess(data, message);
        }
      } catch (error: any) {
        setLoading(false);
        const message = error.response?.data?.message || "Something went wrong";
        setError(message);
        onError(message);
      }
    },
    [service, id]
  );

  return { queryFn, data, loading, error };
}
