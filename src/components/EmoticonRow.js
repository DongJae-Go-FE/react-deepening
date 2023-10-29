import Styled from './styled'

function EmoticonRow({ rank, title, subTitle, imgUrl }) {
  return (
    <Styled>
      <div>{rank}</div>
      <div>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
      <img src={imgUrl} />
    </Styled>
  )
}

export default EmoticonRow
