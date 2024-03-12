import { LinkContainer } from 'react-router-bootstrap';
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';
import numberWithCommas from '../../numbercommas';
const lightYellowColor = 'rgb(255, 255, 153)';
const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  // const [selectedOrderId, setSelectedOrderId] = useState(null);

  // const handleToggleStatus = (orderId) => {
  //   setSelectedOrderId(orderId);
  // };

  // setSelectedOrderId(null)

  // const handleConfirmToggleStatus = (orderId, statusType) => {
  //   // Your logic to update the order status goes here
  //   const updatedOrders = orders.map(order => {
  //     if (order._id === orderId) {
  //       if (statusType === 'paid') {
  //         order.isPaid = !order.isPaid;
  //       } else if (statusType === 'delivered') {
  //         order.isDelivered = !order.isDelivered;
  //       }
  //     }
  //     return order;
  //   });}
    
  return (
    <>
      <h1>Đặt hàng</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Người dùng</th>
              <th>Ngày</th>
              <th>Tổng</th>
              <th>Số tiền thanh toán</th>
              <th>Đã giao</th>
              <th></th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{numberWithCommas(order.totalPrice)} VNĐ</td>
                <td>
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='warning' className='btn-sm'>
                      Chi tiết
                    </Button>
                  </LinkContainer>
                  </td>
                  

                  {/* <td>
                  <Button
                    variant='primary'
                    onClick={() => handleToggleStatus(order._id)}
                    className='btn-sm'
                  >
                    Chuyển đổi trạng thái
                  </Button>
                  </td>
                  <td>
                  {selectedOrderId === order._id && (
                    <Button
                      variant='success'
                      onClick={() => handleConfirmToggleStatus(order._id, 'paid')}
                      className='btn-sm ml-2'
                    >
                      Đã thanh toán
                    </Button>
                  )}
                  </td>
                  <td>
                  {selectedOrderId === order._id && (
                    <Button
                      variant='success'
                      onClick={() => handleConfirmToggleStatus(order._id, 'delivered')}
                      className='btn-sm ml-2'
                    >
                      Đã giao
                    </Button>
                  )}
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
export default OrderListScreen;
