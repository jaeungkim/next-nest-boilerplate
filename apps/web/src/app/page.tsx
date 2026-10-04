"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json() as Promise<{ status: string }>)
      .then((body) => setStatus(body.status))
      .catch(() => setStatus("unreachable"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center font-mono">
      <p>API status: {status}</p>
    </main>
  );
}
