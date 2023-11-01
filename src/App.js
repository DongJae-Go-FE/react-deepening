//함수형
import { useState, useEffect } from 'react'
import Input from './components/Input/Input'
import EmoticonList from './components/home/EmoticonList'
import Skeleton from './components/shared/Skeleton'
import useEmoticons from './components/home/hooks/useEmoticons'

function App() {
  const [colorState, setColorState] = useState(() =>
    localStorage.getItem('themeMode'),
  )
  //콜백함수로 실행을 하면 리랜더링이 되더라도 한번만 실행 >> 지연 초기화

  const [keyword, setKeyword] = useState('')

  //리액트 쿼리 쓰는 법
  const { data: emoticons, isLoading } = useEmoticons()

  const darkMode = colorState === 'dark'

  useEffect(() => {
    localStorage.setItem('themeMode', colorState)
  }, [colorState])
  //디팬더시 사이드 이펙트 감지
  //최초의 한번 무조건 호출한다는 거 잊지마

  const list =
    keyword === ''
      ? emoticons
      : emoticons.filter((emoticon) => {
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
      {isLoading ? (
        [
          ...new Array(10).map((_, idx) => (
            <Skeleton width="100%" height={121} key={idx} />
          )),
        ]
      ) : (
        <EmoticonList emoticons={list} />
      )}
      <div style={{ width: '100%', height: 100, backgroundColor: 'pink' }}>
        광고배너
      </div>
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
