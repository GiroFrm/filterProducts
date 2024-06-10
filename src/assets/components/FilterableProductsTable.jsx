import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import PRODUCTS from '../utils/products'



 function FilterableProductsTable(){

    return (
        <div>
            <p>Filterable products</p>
           <SearchBar/>
           <ProductTable products={PRODUCTS}/>
            </div>
    )
}

export default FilterableProductsTable;