import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready to Own Your Dream Home Sooner?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Don&apos;t let a hefty down payment stand between you and your dream home. Partner with us and make homeownership a reality, faster and easier.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Apply
          </Button>
        </div>
      </Container>
    </section>
  )
}
