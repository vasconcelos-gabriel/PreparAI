"use client";

import { useState, useEffect } from "react";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      setIsUserAuthenticated(authenticated);

      if (!authenticated) {
        redirect("/sign-in");
      }
    };

    checkAuthentication();
  }, []);

  const handleLogout = async () => {
    await signOut();
    redirect("/sign-in");
  };

  return (
    <div className="root-layout">
      <nav className="flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PreparAI</h2>
        </Link>

        <div>
          {isUserAuthenticated ? (
            <Button onClick={handleLogout} className="btn-primary">
              Sair
            </Button>
          ) : (
            <Button className="btn-primary">
              <Link href="/sign-in">Entrar</Link>
            </Button>
          )}
        </div>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
