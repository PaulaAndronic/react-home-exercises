import styled from "styled-components";

export const PageWrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  padding: ${({ theme }) => theme.spacing.large};
  box-sizing: border-box;
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const RightSection = styled.div`
  width: 50%;
  margin: auto;
`;