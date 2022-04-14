import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/posts'

export default function Home({allPostsData}) {
  return (
    <Layout meta_title="Create Next App">


      <h1 className="title">
        AH {'  '} 
        <Link href="/posts/first-post">
          <a>blog!</a>
        </Link>
      </h1>

      <p className="description">
       👋 Welcome to my <code>nextjs-blog</code>
      </p>

      <div class="home-socials">
        <a href="https://es.linkedin.com/in/alfonsohernandezu">
          <Image
            src="/images/linkedin.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Linkedin"
          />
        </a>
        <a href="https://github.com/aheruz">
          <Image
            src="/images/github.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Github∫∫∫"
          />
        </a>
        <a href="https://open.spotify.com/user/22hxtmytom5w7yhtqknzzcija">
          <Image
            src="/images/spotify.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Spotify"
          />
        </a>
        <a href="https://twitter.com/alfonsoheruz">
          <Image
            src="/images/twitter.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Twitter"
          />
        </a>
        <a href="mailto:alfonso.heruz@gmail.com">
          <Image
            src="/images/google.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Google"
          />
        </a>
      </div>

      <div className="grid">
        {allPostsData.map(({id, date, title}) => (
          <Link href={`/posts/${id}`}>
            <a className="card">
              <h3>{title} &rarr;</h3>
              <p>{date}</p>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}