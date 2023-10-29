//함수형
import { useState, useEffect } from 'react'
import EmoticonRow from './components/EmoticonRow'
import Input from './components/Input/Input'

import { data } from './data/data'

function App() {
  const [colorState, setColorState] = useState(() =>
    localStorage.getItem('themeMode'),
  )
  //콜백함수로 실행을 하면 리랜더링이 되더라도 한번만 실행 >> 지연 초기화

  const [keyword, setKeyword] = useState('')

  const darkMode = colorState === 'dark'

  useEffect(() => {
    localStorage.setItem('themeMode', colorState)
  }, [colorState])

  const list =
    keyword === ''
      ? data
      : data.filter((emoticon) => {
          return emoticon.title.toLowerCase().includes(keyword.toLowerCase())
        })

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
      <Input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="검색어를 입력해주세요"
      />
      <ul>
        {list.map((search, i) => {
          return (
            <EmoticonRow
              key={search.title}
              rank={i + 1}
              title={search.title}
              subTitle={search.artist}
              imgUrl={search.titleImageUrl}
            />
          )
        })}
      </ul>
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
