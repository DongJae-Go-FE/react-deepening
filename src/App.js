//함수형
import { useState } from 'react'
import EmoticonRow from './components/EmoticonRow'

function App() {
  const [colorState, setColorState] = useState('white')
  const darkMode = colorState === 'dark'
  return (
    <div style={darkMode ? darkModeStyle : whiteModeStyle}>
      <div
        onClick={() => {
          setColorState(darkMode ? 'white' : 'dark')
        }}
      >
        {darkMode ? (
          <img src="https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/moon-64.png" />
        ) : (
          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-64.png" />
        )}
      </div>
      <EmoticonRow rank={1} title="제목" subTitle="소제목" imgUrl='https://item.kakaocdn.net/do/f815c741c074c7f3bf30655773e16502617ea012db208c18f6e83b1a90a7baa7'  />
    </div>
  )
}

const whiteModeStyle = {
  color: '#444',
  backgroundColor: '#fff',
}
const darkModeStyle = {
  color: '#fff',
  backgroundColor: 'rgb(40,40,52)',
}

export default App
