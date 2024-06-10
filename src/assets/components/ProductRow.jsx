
export default function ProductRow({product}){

    // if product
    return (
       <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
       </tr>
    )
}