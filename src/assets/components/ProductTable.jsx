import ProductCategoryRow  from "./ProductCategoryRow";
import ProductRow from "./ProductRow";


export default function ProductTable({products}){
   
    const rows =[];

    //forEach product add to rows a category and products
    
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
        <ProductCategoryRow/>
        <ProductRow/>
        </>
    )
}