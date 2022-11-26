import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="my-24">
      <Container>
        <div className="flex flex-col lg:w-1/2">
         <p className="text-lg mb-6">
          email@example.com<br/>
          (555) 555-5555
          </p>
          <p className="text-lg">
            Statically Generated with Next.js.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
