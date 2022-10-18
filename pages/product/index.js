//berjalan di sisi client
const Products = ({products}) => {
  return (
    <div>
        {
            products.map((item) => (
                <ul key={item.id}>
                    <li>{item.name} - {item.price}</li>
                </ul>
            ))
        }
    </div>
  )
}
export default Products

//berjalan di sisi server
export const getStaticProps = async () => {
    const response = await fetch('http://localhost:5000/products')
    const data = await response.json();
    // console.log(data)

    return {
        props:{
            products: data,
        },
        revalidate: 1 // adalah berapa detik untuk load nya
    }
}

//nextjs akan membuat static web dan static js