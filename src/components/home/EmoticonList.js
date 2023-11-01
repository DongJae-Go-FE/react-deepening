import EmoticonRow from './EmoticonRow'

function EmoticonList({ emoticons }) {
  return (
    <ul>
      {emoticons.map((search, i) => {
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
  )
}

export default EmoticonList
