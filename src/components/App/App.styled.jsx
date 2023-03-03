import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 50px;

  font-size: ${({ theme }) => theme.fontSize.textPrimary};
`;

export const Title = styled.h1`
  margin-bottom: 20px;

  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Heading = styled.h2`
  margin-bottom: 15px;

  font-size: ${({ theme }) => theme.fontSize.headingPrimary};
`;
