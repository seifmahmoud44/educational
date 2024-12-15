import React from "react";
import Navbar from "../_components/Navbar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-5">
      <Navbar />
      {children}
      <h1>footer</h1>
    </div>
  );
}
