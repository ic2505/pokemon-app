import React from "react";
import Header from "../components/Header";

export default function Error() {
  return (
    <div>
      <Header />
      <div className="flex" style={{ height: "75vh" }}>
        <div className="m-auto">
          <h1 className="font-bold text-2xl">404: Error</h1>
        </div>
      </div>
    </div>
  );
}
