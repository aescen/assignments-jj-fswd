import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: ${(props) => props.margin};
  border: 1px solid rgba(192, 192, 192, 0.5);
  border-radius: 0.5em;
  width: ${(props) => props.width};
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
`;

CardContainer.defaultProps = {
  width: '100%',
  margin: '6px',
};

export const CardTitle = styled.div``;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CardText = styled.div``;

export const CardImage = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  object-fit: cover;
  object-position: center;
`;

CardImage.defaultProps = {
  height: 'auto',
};

export const Card = styled.div`
  padding: 1em;
`;

export const CardPrice = styled.h5`
  font-family: sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5em;
`;

export const CardProductName = styled.h6`
  font-family: sans-serif;
  font-size: 1.25em;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5em;
  color: gray;
`;
