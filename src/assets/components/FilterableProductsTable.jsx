import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

import PRODUCTS from '../utils/products'

import { useState } from "react";


 function FilterableProductsTable(){
        const [filterText, setFilterText] = useState('');
        const [isSelected, setIsSelected] = useState(false);

         
    return (
        <div>
            <p>Filterable products</p>
           <SearchBar filterText ={filterText} 
           isSelected={isSelected}
            onFilterChange={setFilterText}
            onInStockOnlyChange={setIsSelected}/> 
           <ProductTable products={PRODUCTS} 
           filterText={filterText}
           inStockOnly={isSelected}/>
            </div>
    )
}

export default FilterableProductsTable;