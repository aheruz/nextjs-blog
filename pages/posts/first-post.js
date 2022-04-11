
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

const title = "My first post";

export default function FirstPost() {
    return (
      <Layout meta_title={title}>
          <h1 className="title">{title}</h1>
          <p className='description'>This is my first post <code>:)</code></p>
          <Image
            src="/images/profile.gif" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
            layout="fixed"
            className="rounded"
          />
          <br/>
          <h2>
            <Link href="/"><a>← Back home ✌️</a></Link>
          </h2>
      </Layout>
    )
  }