import React, { useContext, useState } from "react";

const SurpriseContext = React.createContext();
const SurpriseUpdateContext = React.createContext();

export function useSurprise() {
  return useContext(SurpriseContext);
}

export function useSurpriseUpdate() {
  return useContext(SurpriseUpdateContext);
}

export function AboutProvider({ children }) {
  const [surprise, setSurprise] = useState(false);

  function toggleSurprise() {
    setSurprise((prevSurprise) => !prevSurprise);
  }

  return (
    <SurpriseContext.Provider value={surprise}>
      <SurpriseUpdateContext.Provider value={toggleSurprise}>
        {children}
      </SurpriseUpdateContext.Provider>
    </SurpriseContext.Provider>
  );
}
