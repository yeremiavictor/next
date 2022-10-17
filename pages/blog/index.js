import {useRouter} from 'next/router'

const index = () => {
  const router = useRouter();
  const {page, limit} = router.query;

  return (
    <div><h2>This is blog page: {page} - limit: {limit}</h2></div>
  )
}

export default index