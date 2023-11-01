import Styled from '../styled'
import Text from '../shared/Text'

function EmoticonRow({ rank, title, subTitle, imgUrl }) {
  return (
    <Styled>
      <div>
        <Text>{rank}</Text>
      </div>
      <div>
        <span>
          <Text bold={true}>{title}</Text>
        </span>
        <span>
          <Text typography="t7">{subTitle}</Text>
        </span>
      </div>
      <img src={imgUrl} />
    </Styled>
  )
}

export default EmoticonRow
