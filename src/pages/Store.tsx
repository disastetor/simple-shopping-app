import { Col, Row } from 'react-bootstrap';
import items from '../data/items.json';
import StoreItem from '../components/StoreItem';
const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1} className="g-3">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Store;
