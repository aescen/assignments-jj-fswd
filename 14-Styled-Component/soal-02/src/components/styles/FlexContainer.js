import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: $((props) => props.direction);
  justify-content: $((props) => props.justify);
  align-items: $((props) => props.align);
`;

FlexContainer.defaultProps = {
  direction: 'row',
  justify: 'center',
  align: 'center',
};

export default FlexContainer;
