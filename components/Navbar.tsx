"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { isAuthenticated, signOut } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      setIsUserAuthenticated(authenticated);
    };

    checkAuthentication();
  }, []);

  const handleLogout = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <nav className="flex justify-between items-center px-4 py-2">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={38} height={32} />
        <h2 className="text-primary-100">PreparAI</h2>
      </Link>

      <div>
        {isUserAuthenticated ? (
          <Button onClick={handleLogout} className="btn-primary">
            Sair
          </Button>
        ) : (
          <Link href="/sign-in">
            <Button className="btn-primary">Entrar</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
