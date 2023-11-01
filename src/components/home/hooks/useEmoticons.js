import { useQuery } from 'react-query'

// useQuery(키값, 데이터호출함수, 옵션)
//  const [emoticons, serEmoticons] = useState([])
//const [isLoading, setIsLoading] = useState(true)

function useEmoticons() {
  return useQuery(['emoticons'], () =>
    fetch('http://localhost:8888/emoticons').then((response) => {
      return response.json()
    }),
  )
}

// useEffect(() => {
//     setIsLoading(true)
//     fetch('http://localhost:8888/emoticons')
//       .then((responese) => {
//         return responese.json()
//       })
//       .then((data) => {
//         serEmoticons(data)
//         setIsLoading(false)
//       })
//       .finally(() => {
//         setIsLoading(false)
//       })
//     //fetch 첫번째 인자 어디서 호출하는 위치
//   }, [])

//처음에 단한번만 호출하는
//    console.log('여기서 api 호출!')
//어싱크 어웨잍트

export default useEmoticons
