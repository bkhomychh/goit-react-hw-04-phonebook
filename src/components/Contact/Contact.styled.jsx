import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  gap: 20px;
  padding: 10px 20px;

  border: ${({ theme }) => `1px solid ${theme.color.bgSecondary}`};
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.textPrimary};
  font-weight: 700;
  line-height: calc(24 / 20);
`;

export const Number = styled.span`
  font-size: ${({ theme }) => theme.fontSize.textSecondary};
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  margin-left: auto;

  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.bgPrimary};
  border-radius: 5px;

  cursor: pointer;
  transition: ${({ theme }) =>
    `all 250ms ${theme.transition.primaryCubicBezier}`};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.color.bgDanger};
    color: ${({ theme }) => theme.color.textAccent};
  }
`;
