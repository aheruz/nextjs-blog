
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

const title = "My first post";

export default function Post({postData}) {
  return (
    <Layout meta_title={postData.title}>
      <div className="inner-container">
        <h1 className="title">{postData.title}</h1>
        <p className='description'><code>{postData.date}</code> post.</p>
        <Image
          src="/images/profile.gif" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
          layout="fixed"
          className="rounded"
        />
        <br/>
        <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}></div>
        <h2>
          <Link href="/"><a>← Back home ✌️</a></Link>
        </h2>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
