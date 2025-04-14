import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
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
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Faça uma entrevista</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}

         
        </div>
      </section>
    </>
  )
}

export default page
