

function SearchBar({filterText, isSelected, onFilterChange,onInStockOnlyChange }){
    

    return (
      <>
      <form>
      <input type="text" 
      placeholder="Search..."
       value={filterText}
       onChange={(e)=> onFilterChange(e.target.value)}
      
      /> <br/>
      <label >
      <input type="checkbox" 
      checked={isSelected}
      onChange={(e)=> onInStockOnlyChange(e.target.checked)}/>
      {' '}
      Only show products in stock
      </label>
      </form>
      </> 
    );
}

export default SearchBar