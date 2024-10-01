"use client";

import { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

const ProvidersOfPersistGate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default ProvidersOfPersistGate;
