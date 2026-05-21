"use client";

import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    alert("You are being redirected!");
  }, []);

  return <h1>Profile Page</h1>;
}
