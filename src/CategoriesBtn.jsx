const categoriesBtn=({categories,filterItems })=>{
return(
    <div className="btn-container">
        {categories.map((category)=>{
            return(
                <button  onClick={()=>filterItems(category)} type="button" className="btn" key={category}>{category}</button>
            )
        })}
    </div>
)
}
export default categoriesBtn;