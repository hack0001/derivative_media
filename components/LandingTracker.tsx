"use client";
import { useEffect } from "react";
import { rememberLanding } from "@/lib/landing";

// Records the visit's first page (see lib/landing.ts). Renders nothing.
export default function LandingTracker() {
  useEffect(() => { rememberLanding(); }, []);
  return null;
}
