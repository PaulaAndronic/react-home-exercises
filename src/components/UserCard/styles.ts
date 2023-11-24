import styled from "styled-components";

export const StyledUserCard = styled.div`
  width: 200px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;
