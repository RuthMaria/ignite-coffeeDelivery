import styled from 'styled-components';

export const HeaderContent = styled.header`
  background: ${(props) => props.theme['background']};
  position: fixed;
  width: 100%;
  //  height: 6.5rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 92rem;
  padding: 32px 10rem;
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
        right: 150px;

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
          //margin-top: -2rem;
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
