import './TableRow.css'

export default function TableRow({data}){
    return(
    <>
        <tr className='table-row'>
            <td>
                <span className='tr-profesional'>
                    <img src="./logoSerena.webp" alt="" />
                    <div>
                        <h3>{data.nombre}</h3>
                        <p>{data.especialidad}</p>
                    </div>
                </span>
            </td>
            <td>
                <div className='tr-fecha'>
                    <h3>{data.fecha}</h3>
                    <p>{data.hora}</p>
                </div>
            </td>
            <td>
                <div className='tr-accion'>
                    <button>...</button>
                </div>
            </td>
        </tr>
    </>
)
}