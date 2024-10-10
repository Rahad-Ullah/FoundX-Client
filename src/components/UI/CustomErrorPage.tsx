"use client";

import { Button } from "@nextui-org/button";

export default function CustomErrorPage() {
  return (
    <div className="text-center my-16">
      <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
      <Button className="text-lg font-bold mt-4">Try again</Button>
    </div>
  );
}
