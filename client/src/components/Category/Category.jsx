const Category = (props) => {

  return (
    <div className='category'>
      <p>{task.category}</p>
      <select name="category" id="category">
        {props.categories.map((el) => {
          return <option value={el}>{el}</option>
        })}
      </select>
    </div>
  )

}

export default Category;