const List = ({lists}) => {
  return (
    <div>
      <ul>
          {lists.map(({id, text}) => (
               <li key={id}>{text}</li>
          ))}
      </ul>
    </div>
  )
}

export default List
