import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  padding: 0.5em 1.5em;
  font-family: sans-serif;
  font-size: 1.25em;
  border: 1px solid ${(props) => (props.outline ? 'lightblue' : 'white')};
  background-color: ${(props) => (props.outline ? 'white' : 'lightblue')};
  color: ${(props) => (props.outline ? 'lightblue' : 'white')};
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  ${this}: hover & {
    border: 1px solid ${(props) => (props.outline ? 'lightblue' : 'cornflowerblue')};
    background-color: ${(props) => (props.outline ? 'lightblue' : 'cornflowerblue')};
    color: white;
  }
`;

StyledButton.defaultProps = {
  outline: false,
};

export default StyledButton;
