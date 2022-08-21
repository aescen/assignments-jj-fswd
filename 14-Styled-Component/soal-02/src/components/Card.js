import {
  CardContainer,
  CardImage,
  CardPrice,
  CardProductName,
  CardBody,
  // CardTitle,
  // CardText,
} from './styles/Card';
import Button from './Button';

const Card = ({ product }) => {
  const { imageUrl, price, productName } = product;
  const width = '500px';

  return (
    <CardContainer width={width}>
      <CardImage src={imageUrl} height={width} />
      <CardBody>
        <CardPrice>{price}</CardPrice>
        <CardProductName>{productName}</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
};

export default Card;
