function EmoticonRow({ rank, title, subTitle, imgUrl }) {
  return <li>
    <div>{rank}</div>
    <div>
        <span>{title}</span>
        <span>{subTitle}</span>
    </div>
    <img src={imgUrl}/>
  </li>
}

export default EmoticonRow
