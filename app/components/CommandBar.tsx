"use client";
import { useEffect } from "react";
import { init } from "commandbar";
import { COMMANDBAR_ORG_ID } from "../constants";

if (typeof window !== "undefined") {
  init(COMMANDBAR_ORG_ID);
}

export default () => {
  useEffect(() => {
    window.CommandBar.boot("");

    return () => {
      window.CommandBar.shutdown();
    };
  }, []);

  return null;
};
