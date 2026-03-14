"use client";

import { useMemo, useState } from "react";

interface WalletState {
  isConnected: boolean;
  publicKey: string | null;
  network: string;
}

/**
 * Placeholder hook for wallet integrations (e.g. Freighter, xBull).
 * Keep all wallet logic in this hook so UI components stay simple.
 */
export function useWallet() {
  const [state, setState] = useState<WalletState>({
    isConnected: false,
    publicKey: null,
    network: process.env.NEXT_PUBLIC_STELLAR_NETWORK ?? "testnet",
  });

  const connect = async () => {
    // In production, replace this with real wallet provider checks and signature flow.
    setState((prev) => ({
      ...prev,
      isConnected: true,
      publicKey: "GBRP...PLACEHOLDER...2PR5",
    }));
  };

  const disconnect = () => {
    setState((prev) => ({
      ...prev,
      isConnected: false,
      publicKey: null,
    }));
  };

  const shortAddress = useMemo(() => {
    if (!state.publicKey) return "";
    return `${state.publicKey.slice(0, 4)}...${state.publicKey.slice(-4)}`;
  }, [state.publicKey]);

  return {
    ...state,
    shortAddress,
    connect,
    disconnect,
  };
}
