import styled from "styled-components";

export default styled.button({
  border: 'none',
  color: 'white',
  borderRadius: 4,
  padding: '10px 20px',
  fontSize: 20,
  textTransform: 'uppercase',
  marginRight: 10,
  "&:hover": {
    boxShadow: '0px 0px 0px 5px black',
  },
  '&, &.bg-orange': {
    backgroundColor: 'rgb(250, 127, 1)',
  },
  '&.bg-orange-light': {
    backgroundColor: 'rgb(251,156,6)',
  },
  '&.bg-red': {
    backgroundColor: 'rgb(209,8,7)',
  },
});
