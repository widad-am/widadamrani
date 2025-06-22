"use client";
import { useEffect } from "react";

export default function LangEffect() {
  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    document.documentElement.lang = lang;
  }, []);
  return null;
} 