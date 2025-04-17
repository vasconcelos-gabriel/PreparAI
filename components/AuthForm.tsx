"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
// import { Input } from '@/components/ui/input'
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/client";
import { signIn, signUp } from "@/lib/actions/auth.action";
import { useState } from "react";
import Loader from "./Loader";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (type === "sign-up") {
        const { name, email, password } = values;

        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredentials.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result?.success) {
          toast.error(result?.message);
          return;
        }

        toast.success("Conta criada com sucesso");
        router.push("/sign-in");
      } else {
        const { email, password } = values;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();

        if (!idToken) {
          toast.error("Erro ao fazer login");
          return;
        }

        await signIn({
          email,
          idToken,
        });
        toast.success("Logado com sucesso");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro");
    } finally {
      setIsLoading(false);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-13 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">PreparAI</h2>
        </div>
        <h3>Pratique entrevistas de emprego com IA</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Nome"
                placeholder="Seu nome"
                disabled={isLoading}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="E-mail"
              placeholder="Seu Email"
              disabled={isLoading}
            />
            <FormField
              control={form.control}
              name="password"
              label="Senha"
              type="password"
              placeholder="*******"
              disabled={isLoading}
            />
            {isLoading ? (
              <Loader />
            ) : (
              <Button className="btn" type="submit">
                {isSignIn ? "Entrar" : "Criar uma conta"}
              </Button>
            )}
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "Ainda não tem uma conta?" : "Já possui conta?"}

          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Entrar" : "Cadastre-se"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
