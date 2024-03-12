import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';
import numberWithCommas from '../numbercommas';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='mb-4'style={{ maxWidth: '500px', margin: 'auto'}} >
      {products.map((product) => (
        <Carousel.Item >
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid style={{ height: '500px'}}/>
            <Carousel.Caption className='carousel-caption'>
              <h2 className='text-white text-right'>
                {product.name} ({numberWithCommas(product.price)} VNĐ)
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
      {/* <style>{`
        .carousel-control-prev-icon {
          background-color: black;
        }

        .carousel-control-next-icon {
          background-color: black;
        }
      `}</style> */}
    </Carousel>
  );
};

export default ProductCarousel;
