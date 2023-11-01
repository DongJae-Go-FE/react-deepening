import { createGlobalStyle } from 'styled-components'

import { colorPalette } from './colorPalette'

//ex. reset

export default createGlobalStyle`
//글로벌 스타일 정의
${colorPalette}
`
