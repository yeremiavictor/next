import { useRouter } from "next/router"
const add = () => {
    const router = useRouter()
    const publish = () => {
        console.log('Publish a blog Post')
        router.push('/blog')

    }
  return (
    <div>
      <h2>Add new blog</h2>
      <button onClick={publish}>Publish blog</button>
    </div>
  )
}

export default add
