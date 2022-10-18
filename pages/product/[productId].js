import { useRouter } from "next/router" 

const ProductDetail = ({product}) => {
    const router = useRouter()

    if(router.isFallback){
        return <div>Loading...</div>
    }

  return (
    <div>{product.name} - {product.price}</div>
  )
}

export default ProductDetail



//berjalan di sisi server
export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:5000/products?_limit=2`)
    const data = await response.json();

    const paths = data.map((item) => ({
        params: {
            productId: `${item.id}`
        }
    }))

    return{
        paths: paths,
        fallback: true, //selain angka params dalam panggilan link akan tampil 404
    }
}


export const getStaticProps = async ({params}) => {
    const response = await fetch(`http://localhost:5000/products/${params.productId}`)
    const data = await response.json();
    // console.log(data)

    if(!data.id){
        return{
            notFound: true
        }
    }

    return {
        props:{
            product: data
        },
        revalidate: 1,
    }
}