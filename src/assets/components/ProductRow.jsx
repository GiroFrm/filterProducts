import { styleText } from "util"

export default function ProductRow({product}){

   
    let productName = product.stocked ? product.name : 
    <span style={{color: 'red'}}>
       { product.name}
    </span>
   
    return (
       <tr>
        <td>{productName}</td>
        <td>{product.price}</td>
       </tr>
    )
}