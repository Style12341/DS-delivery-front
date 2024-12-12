import api from "./api.ts"

import { Pedido } from "../components/pedidos/tablePedidos"

export const getAllPedidos = () => {
    return api.get("/pedido")
}

export const deletePedido = (id: number) => {
    return api.delete(`pedido/${id}`);
}

export const crearPedido = (data: Pedido) => {
    return api.post("/pedido", 
        {
            "vendedorId": data.vendedor_id,
            "clienteId": data.cliente_id,
        }
    );
}

export const editarPedido = (data: Pedido) => {
    return api.put(`pedido/${data.id}`, 
        {
            "vendedorId": data.vendedor_id,
            "clienteId": data.cliente_id,
            "estado": data.estado,
        }
    );
}