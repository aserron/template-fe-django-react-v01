import { fetchBackendHealth, type HealthResponse } from "@demo/shared";
import { useEffect, useState } from "react";

export function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchBackendHealth("/api")
      .then((data) => {
        if (active) {
          setHealth(data);
        }
      })
      .catch((err: unknown) => {
        if (active) {
          setError(err instanceof Error ? err.message : String(err));
        }
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 680, margin: "3rem auto" }}>
      <h1>Django 6.1 REST + React 19 (TypeScript 7 Go)</h1>
      <p>Polyglot monorepo workspace powered by uv, Pyrefly, Ruff, pnpm, and tsgo.</p>
      <section
        style={{
          padding: "1rem",
          borderRadius: 8,
          border: "1px solid #d0d7de",
          background: "#f6f8fa",
        }}
      >
        <h2>Backend Health Status</h2>
        {health ? (
          <ul>
            <li>
              <strong>Status:</strong> {health.status}
            </li>
            <li>
              <strong>Service:</strong> {health.service}
            </li>
            <li>
              <strong>Django:</strong> {health.django_version}
            </li>
            <li>
              <strong>Python:</strong> {health.python_version}
            </li>
          </ul>
        ) : error ? (
          <p style={{ color: "#cf222e" }}>Backend unreachable: {error}</p>
        ) : (
          <p>Checking backend health...</p>
        )}
      </section>
    </main>
  );
}
