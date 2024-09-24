// components/ClientSessionProvider.tsx
"use client"; // Ensures it's a client-side component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ClientSessionProviderProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any; // Update with the correct type if needed
}

const ClientSessionProvider = ({
  children,
  session,
}: ClientSessionProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default ClientSessionProvider;
