import {useEffect} from 'react'
import { useParams,useNavigate } from "react-router-dom"
import { getInvoice } from '../data'
export default function Invoices(){
    let params = useParams()
    let invoice  = getInvoice(parseInt(params.invoiceId,10))
    let navigate = useNavigate();
    useEffect(()=>{
      if(params.invoiceId== 1995){
        // navigate('expenses', { replace: false });
        navigate("/expenses")
      
      }
    })
  
      return (
        <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
      </main>
    )
    
    
}