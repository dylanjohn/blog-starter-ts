type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-6vw md:px-4vw">{children}</div>
}

export default Container
