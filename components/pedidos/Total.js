import React, { useContext } from "react";
import PedidoContext from "../../context/PedidoContext";

const Total = () => {
  const pedidoContext = useContext(PedidoContext);
  const { total } = pedidoContext;

  return (
    <div className="flex items-center mt-5 justify-between bgwhite p-3 border-solid border-2">
      <h2 className="text-gray-800 text-lg">Total a pagar: </h2>
      <p className="text-gray-800 mt-0">$ {total}</p>
    </div>
  );
};

export default Total;
