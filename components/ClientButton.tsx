"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import Loader from "./Loader";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const ClientButton = ({ href, variant = "primary", children }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    router.push(href);
  };

  return (
    <Button
      className={`btn-${variant}`}
      onClick={handleClick}
      disabled={loading}
      
    >
      {loading ? <Loader /> : children}
    </Button>
  );
};

export default ClientButton;
