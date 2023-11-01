import styled from 'styled-components'

import { typographyMap } from '../../typography'
import { colors } from '../../colorPalette'

const Text = styled.span(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
  //믹스인으로 정의 해놓은 스타일 사용하겠다.
)

export default Text
