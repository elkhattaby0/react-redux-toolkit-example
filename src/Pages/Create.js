import { useDispatch, useSelector } from "react-redux";
import { add_produit } from "../Redux-toolkit/productSlice";
import { useState } from "react";

const Create = () => {
    const [pro, setPro] = useState({})
    const dispatch = useDispatch()
    const show = useSelector(state=> state.product.products)

    const getInfo = (e)=> {
        const arr = show.map(n => parseInt(n.ref, 10));
        const maxRef = Math.max(...arr) + 1;

        const name = e.target.name
        const value = e.target.value
        setPro(n=> ({...n, ref: maxRef ,[name]:value}))
    }
    const submitClick = (e) => {
        e.preventDefault()
        if(pro.nom !== "" && pro.categorie !== "")
        {
            dispatch(add_produit(pro))
        }
        
    }

    return (
        <form onSubmit={submitClick}>
            <div>
                <p>Nom</p>
                <input type="text" placeholder="Enter Name" name="nom" value={pro.nom} onChange={getInfo} />
            </div>
            <div>
                <p>Categorie</p>
                <input type="text" placeholder="Enter Categorie" name="categorie" value={pro.categorie} onChange={getInfo} />
            </div>
            <button>Valid</button>
        </form>
    )
}

export default Create