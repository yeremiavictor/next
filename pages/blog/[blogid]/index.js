import {useRouter} from 'next/router'

const Blogid = () => {
    const router = useRouter()
    const {blogid} = router.query
  return (
    <div>
      <h2>Blog Dynamic Route: {blogid}</h2>
    </div>
  )
}

export default Blogid
