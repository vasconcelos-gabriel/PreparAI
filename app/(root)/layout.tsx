"use client";

import { useEffect, useState, ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      if (!auth) {
        redirect("/sign-in");
      } else {
        setCheckedAuth(true);
      }
    };

    checkAuth();
  }, []);

  if (!checkedAuth) return null;

  return (
    <div className="root-layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
