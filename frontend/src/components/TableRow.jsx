import './TableRow.css';
import dayjs from 'dayjs';
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/es"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(timezone)


export default function TableRow({data}){
    dayjs.locale("es")
    return(
    <>
        <tr className='table-row'>
            <td>
                <span className='tr-profesional'>
                    <img src={`/${data.fotoPsicologo}`}  alt="" />
                    <div>
                        <h3>{data.nombrePsicologo}</h3>
                        <p>{data.especialidadPsicologo}</p>
                    </div>
                </span>
            </td>
            <td>
                <div className='tr-fecha'>
                    <h3>{dayjs.utc(data.fechaTurno).format("dddd, D [de] MMMM")}</h3>
                    <p>{dayjs.utc(data.fechaTurno).format("HH:mm[hs]")}</p>
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