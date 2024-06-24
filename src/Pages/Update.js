import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { update_produit } from "../Redux-toolkit/productSlice"
import { useEffect, useState } from "react"

const Update = () => {
    const dispatch = useDispatch()
    const { ref } = useParams()
    const ser = useSelector(state=> state.product.products)
    const [info, setInfo] = useState({}) 
    useEffect(()=> {
        const product = ser.find(n => n.ref === parseInt(ref))
        setInfo(product)
    }, [])
    
    const getInfo = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInfo(n=> ({...n, ref: info.ref ,[name]:value}))
    }

    const submitClick = (e) => {
        e.preventDefault()
        if(info.nom !== "" && info.categorie !== "")
        {
            dispatch(update_produit(info))
        }        
    }

    return (
        <form onSubmit={submitClick}>
            <div>
                <p>Ref : {info.ref}</p>
            </div>
            <div>
                <p>Nom</p>
                <input type="text"  name="nom" value={info.nom} onChange={getInfo} />
            </div>
            <div>
                <p>Categorie</p>
                <input type="text"  name="categorie" value={info.categorie} onChange={getInfo} />
            </div>
            <button>Update</button>
        </form>
    )
}

export default Update