import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ width: '100%', backgroundColor: '#dbffa7' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Fresh Fruit &copy; {currentYear}</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-left  '>
          <p style={{ fontWeight: 'bold' }}>Thông tin liên hệ:</p>
            <p>Số điện thoại: +1234567890</p>
            <p>Địa chỉ: Thành Phố Hồ Chí Minh</p>
            <p>Email: support@freshfruit.com </p>
            <p>Tên công ty: Fresh Fruit Company </p>
          </Col>
          <Col className='text-left '>
            <div style={{ maxWidth: '200px'}}>
            <p style={{ fontWeight: 'bold' }}>Về chúng tôi:</p>
            <span style={{ display: 'inline-block', textAlign: 'justify' }}> 
              Fresh Fruit mong rằng sự chân thành và thấu hiểu nhu cầu của khách hàng sẽ mang đến cho Khách hàng những loại hoa quả tươi ngon và đạt chuẩn nhất
            </span>
            </div>
          </Col>
          <Col className='text-left  '>
          <p style={{ fontWeight: 'bold' }}>Trang</p>
          <p><Link to='/'>Trang chủ</Link></p>
          <p><Link to='/cart'>Giỏ hàng</Link></p>
          <p><Link to='/profile'>Thông tin cá nhân</Link></p>
          </Col>
          <Col className='text-left '>
            <div style={{ maxWidth: '200px' }}>
            <p style={{ fontWeight: 'bold' }}>Theo dõi chúng tôi:</p>
            <span style={{ display: 'inline-block', textAlign: 'justify' }}> 
              Chúng tui cập nhật về những sản phẩm mới của công ty chúng tui thông qua Email 
            </span>
            </div>
          </Col>
        </Row>
        </Container>
    </footer>
  );
};
export default Footer;
