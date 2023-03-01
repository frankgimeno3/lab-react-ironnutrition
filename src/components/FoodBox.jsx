import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food}) {
    const {_id, name, calories, image, servings, deleteHandler }=food;
    
    const deleteFoodBox = () => {
      const funcionDelete = () => {
          deleteHandler(_id);
      }
      return funcionDelete;
  }
  
    return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button className="btn btn-danger" onClick={deleteFoodBox()}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;