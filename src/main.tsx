import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";
import faviconUrl from "./assets/favicon.ico";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = faviconUrl;
document.head.appendChild(link);

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
