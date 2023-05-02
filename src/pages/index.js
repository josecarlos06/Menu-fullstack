import Layout from '@/Layout/Layout'
import Product from '@/components/Product';
import useMenu from '@/hooks/useMenu'
const index = () => {
   const {currentCategory} = useMenu();
  return (
    <Layout title="Menu app">
      <section className='grid sm:grid-cols-2  md:grid-cols-3 gap-5 mt-5 mb-20'>
         {currentCategory?.products?.map(product => (
            <Product key={product.id} product={product}/>
         ))}
      </section>
    </Layout>
  )
}

export default index