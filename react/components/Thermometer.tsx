import React, { useState, useEffect } from 'react';
import {useOrderForm} from "vtex.order-manager/OrderForm"
import axios from 'axios';
import ProgressBar from './ProgressBar';
const Thermometer = () => {
  const { orderForm: {totalizers} } = useOrderForm()
  const [totalOrder, setTotalOrder] = useState(0)
  const [goal, setGoal] = useState(0)
  const promoId = "568c62a5-386d-477b-9b7a-bd38b1e3b78e"
  const url = `https://marlondelaroche--vuitg.myvtex.com/api/rnb/pvt/calculatorconfiguration/${promoId}`

  useEffect(() => {
    axios.get(url).then((response)=> {
      setGoal(response.data.totalValueFloor)
      setTotalOrder(totalizers[0]?.value / 100)
      }
    )
  }, [totalizers])

  console.log("GOAL", goal);
  console.log("totalOrder", totalOrder);

  return (
    <>
    <ProgressBar remainingPercentage={totalOrder < goal ? totalOrder/goal*100 : 100}/>
    {
     totalOrder >= goal
     ?
     <div>Tienes envío gratis</div>
     :
     <div>Te falta {`$${(goal-totalOrder).toLocaleString("de-DE")}`} para disfrutar de envío gratis</div>
    }
    </>
  )
}

export default Thermometer;
