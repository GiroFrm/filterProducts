import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";





 function FilterableProductsTable(){

    return (
        <div>
            <p>Filterable products</p>
           <SearchBar/>
           <ProductTable/>
            </div>
    )
}

export default FilterableProductsTable;