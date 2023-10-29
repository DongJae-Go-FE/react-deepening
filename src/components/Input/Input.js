import Styled from './styled'

function Input({ type, value, onChange, placeholder }) {
  return (
    <Styled
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></Styled>
  )
}

export default Input
