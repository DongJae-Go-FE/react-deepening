import styled from 'styled-components'

const Styled = styled.li`
  display: flex;
  align-items: center;
  gap: 0 20px;
  width: 450px;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  div {
    &:nth-of-type(1) {
      font-size: 30px;
      font-weight: bold;
    }

    &:nth-of-type(2) {
      width: 300px;
      font-size: 15px;
      white-space: nowrap;
    }
  }
  img {
    width: 100px;
    height: 100px;
  }
`

export default Styled
