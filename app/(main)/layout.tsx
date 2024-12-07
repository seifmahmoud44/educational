import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>navbar</h1>
      {children}
      <h1>footer</h1>
    </div>
  );
}
