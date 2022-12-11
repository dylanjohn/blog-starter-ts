import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col flex lg:w-6/12 mt-40 mb-56 text-lg font-semibold">
      {/* <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1> */}
      <h4 className="leading-loose mb-5">
      Quisque consequat massa vitae nisl consequat pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat massa vitae nisl consequat pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h4>

      <h4 className="leading-normal"> <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Next.js
        </a>
      </h4>

     
    </section>
  )
}

export default Intro
