import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-6xl font-bold leading-normal mb-12 md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
