import styled, { css } from "styled-components";

const type = {
  horizontal: css`
    justify-content: space-between;
    align-items: center;
  `,
  vertical: css`
    flex-direction: column;
    gap: 1.6rem;
  `,
};
const StyledRow = styled.div`
  display: flex;
  ${(props) => type[props.type]}
`;

function Row({ children, type = "vertical" }) {
  return <StyledRow type={type}>{children}</StyledRow>;
}

export default Row;
