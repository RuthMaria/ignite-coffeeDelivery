import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 92rem;
  padding: 0 10rem;
`;

export const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled(flex)`
  gap: 0.75rem;

  a {
    display: relative;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
    padding: 8px 9px;
    color: ${(props) => props.theme['yellow-dark']};

    div {
      display: relative;

      div {
        position: absolute;
        top: 23px;
        right: 200px;

        p {
          background: ${(props) => props.theme['yellow-dark']};
          color: ${(props) => props.theme['white']};
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.75rem;
        }
      }
    }
  }
`;

export const City = styled(flex)`
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 10px 8px;
  gap: 0.25rem;
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 1.3;
`;
