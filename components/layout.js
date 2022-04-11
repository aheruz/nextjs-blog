import Head from 'next/head'
import styles from './layout.module.css'
export default function Layout({ meta_title, children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{meta_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
            <footer>

                Made in {' '}
                <img src="/images/javascript.gif" alt="Javascript" className="logo" />
                <img src="/images/react-native.gif" alt="React" className="logo" />

            </footer>
        </div>
    )
}