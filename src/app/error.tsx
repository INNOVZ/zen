"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2rem",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "2rem", fontWeight: 600 }}>
                Something went wrong!
            </h1>
            <p style={{ maxWidth: "32rem", color: "hsl(215 20% 65%)" }}>
                Something went wrong while rendering this page. Please try again or
                return to the previous page.
            </p>
            <button
                onClick={() => reset()}
                style={{
                    marginTop: "1rem",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    fontSize: "1rem",
                }}
            >
                Try again
            </button>
        </div>
    );
}
