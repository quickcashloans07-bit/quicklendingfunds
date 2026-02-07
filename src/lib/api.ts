const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "";

const handleResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");
  const isJSON = contentType && contentType.includes("application/json");
  const data = isJSON ? await response.json() : await response.text();

  if (!response.ok) {
    const message = typeof data === "string" ? data : data?.message || "Request failed";
    throw new Error(message);
  }

  return data;
};

export const submitLoanApplication = async (payload: Record<string, unknown>) => {
  // If VITE_API_URL is not set, we default to empty string (relative path)
  // This allows the app to work if served from the same origin as the API
  // or if a proxy is configured.

  const response = await fetch(`${API_BASE_URL}/api/loan-application`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};
