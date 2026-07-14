"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LeadModalContextType {
  isOpen: boolean;
  targetUrl: string;
  ctaLocation: string;
  openLeadModal: (whatsappUrl: string, location: string) => void;
  closeLeadModal: () => void;
  hasCapturedLead: boolean;
  setHasCapturedLead: (captured: boolean) => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");
  const [ctaLocation, setCtaLocation] = useState("");
  const [hasCapturedLead, setHasCapturedLead] = useState(false);

  useEffect(() => {
    // Check if user has already sent lead in localStorage
    const captured = localStorage.getItem("invertech_lead_captured") === "true";
    setHasCapturedLead(captured);
  }, []);

  const openLeadModal = (whatsappUrl: string, location: string) => {
    setTargetUrl(whatsappUrl);
    setCtaLocation(location);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
    setTargetUrl("");
    setCtaLocation("");
  };

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        targetUrl,
        ctaLocation,
        openLeadModal,
        closeLeadModal,
        hasCapturedLead,
        setHasCapturedLead,
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
