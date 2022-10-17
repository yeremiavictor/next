import {useRouter} from 'next/router'

const Comentid = () => {
    const router = useRouter()
    const {blogid, comentid} = router.query
  return (
    <div>
      <h2>Blog Dynamic Route: {blogid} -  {comentid}</h2>
    </div>
  )
}

export default Comentid
