import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('rounded-lg', {
        '': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0 cover-image">
      <div className="cover-image-inner">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
    </div>
  )
}

export default CoverImage
