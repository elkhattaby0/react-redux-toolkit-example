import { useSelector, useDispatch } from "react-redux";
import { delete_produit } from "../Redux-toolkit/productSlice";
import { useNavigate } from "react-router-dom";


const Read = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const show = useSelector(state=> state.product.products)
    
    return (
        <table>
            <tr>
                <th>Ref</th>
                <th>Nom</th>
                <th>Categorie</th>
                <th colspan="2">Method</th>
            </tr>
            {
                show.map(n=> (
                    <tr>
                        <td>{n.ref}</td>
                        <td>{n.nom}</td>
                        <td>{n.categorie}</td>
                        <td>
                            <button onClick={()=> navigate(`/edit/${n.ref}`)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={()=> dispatch(delete_produit(n.ref))}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    )
}

export default Read;