import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";

import {
  getCurrentUser,
} from "@/lib/actions/auth.action";
import { getInterviewByUserId, getLatestInterviews } from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  if (!user || !user.id) {
    redirect("/sign-in");
  }
  const [userInterviews, latestInterviews ] = await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);


  const hasPastInterviews = userInterviews?.length > 0;
const hasUpcomingInterviews = latestInterviews?.length > 0;  

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Prepare-se para entrevistas com prática e feedback impulsionados por
            IA.
          </h2>
          <p className="text-lg">
            Pratique entrevistas de emprego com perguntas reais e receba
            feedback instantâneo.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Comece agora</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden max-md:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Suas entrevistas</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>Você ainda não gerou nenhuma entrevista</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Faça uma entrevista</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>Não há novas entrevistas disponíveis</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
