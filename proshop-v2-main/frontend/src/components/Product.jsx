import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import numberWithCommas from '../numbercommas';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' style={{height: '250px'}}/>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} đánh giá`}
          />
        </Card.Text>

        <Card.Text as='h3'>{numberWithCommas(product.price)} VNĐ</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
