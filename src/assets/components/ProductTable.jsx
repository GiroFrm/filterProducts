import ProductCategoryRow  from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


export default function ProductTable({products}){
   
    const rows =[];
    let lastcategory = null;
    
    products.forEach(product => {
    
        if(product.category!= lastcategory){
            rows.push(
                <ProductCategoryRow key={product.category} category={product.category}/>
            )
        }

        rows.push(
            <ProductRow  key={product.name} product={product}/>
        )
       lastcategory = product.category; 
    });

    return (
        <>
        <p>Product Table</p>
        <table>
     <thead/>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    <thead/>
    <tbody>
        {rows}
    </tbody>
        </table>
        </>
    )
}