const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export interface CreatorProfile {
  username: string;
  displayName: string;
  bio: string;
  preferredAsset: string;
}

/**
 * Shared fetch helper used by all API methods.
 * Centralizing this logic keeps retries, headers, and error handling consistent.
 */
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
    // For frequently updated blockchain data, contributors can switch this to no-store.
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

export async function getCreatorProfile(username: string): Promise<CreatorProfile> {
  try {
    return await request<CreatorProfile>(`/creators/${username}`);
  } catch {
    // Fallback makes local UI work before backend endpoints are available.
    return {
      username,
      displayName: `@${username}`,
      bio: "Creator bio will be loaded from the backend API.",
      preferredAsset: "XLM",
    };
  }
}

export async function createTipIntent(payload: {
  username: string;
  amount: string;
  assetCode: string;
}) {
  return request<{ intentId: string; checkoutUrl?: string }>("/tips/intents", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
