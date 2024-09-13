import { useRouter } from 'next/router'
import blem from 'blem'
import "@/pages/author/style.scss"

export default function AuthorPage() {
  const bem = blem("AuthorPage")
  const router = useRouter()
  return <div className={bem("")}>
    <strong className={bem("title")}>Author</strong>
    <em className={bem("author-text")}>{router.query.author}</em>
  </div>
}

/*
Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
*/
