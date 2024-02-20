import "./table.css"
import { Link } from "react-router-dom";
export const Table = ()=> {
    return (
        <div className="container table">
            <table>
            <th>استان ها</th>
            <tr>
                <td>
                    تهران
                </td>
            </tr>
            <tr >
                <td >
                    آذربایجان شرقی
                </td>
            </tr>
            <tr>
                <td>
                    آذربایجان غربی
                </td>
            </tr>
            <tr>
                <td>
                    اردبیل
                </td>
            </tr>
            <tr>
                <td>
                    اصفهان 
                </td>
            </tr>
            <tr>
                <td>
                    ایلام   
                </td>
            </tr>
            <tr>
                <td>
                بوشهر  
                </td>
            </tr>
            <tr>
                <td>
                تهران
                </td>
            </tr>
            <tr>
                <td>
                چهارمحال و بختیاری 
                </td>
            </tr>
            <tr>
                <td>
                خراسان جنوبی
                </td>
            </tr>
            <tr>
                <td>
                خراسان رضوی
                </td>
            </tr>
            <tr>
                <td>
                خراسان شمالی
                </td>
            </tr>
            <tr>
                <td>
                خوزستان
                </td>
            </tr>
            <tr>
                <td>
                زنجان
                </td>
            </tr>
            
            <tr>
                <td>
                سمنان
                </td>
            </tr>
            <tr>
                <td>
                سیستان و بلوچستان 
                </td>
            </tr>
        </table>
        <table>
        <th>استان ها</th>
            <tr>
                <td>
                فارس
                </td>
            </tr>
            <tr>
                <td>
                قزوین
                </td>
            </tr>
            <tr>
                <td>
                قم
                </td>
            </tr>
            <tr>
                <td>
                کردستان
                </td>
            </tr>
            <tr>
                <td>
                کرمان
                </td>
            </tr>
            <tr>
                <td>
                کرمانشاه
                </td>
            </tr>
            <tr>
                <td>
                کهکیلویه و بویراحمد 
                </td>
            </tr>
            <tr>
                <td>
                گلستان
                </td>
            </tr>
            <tr>
                <td>
                گیلان
                </td>
            </tr>
            <tr>
                <td>
                لرستان
                </td>
            </tr>
            <tr>
                <td>
                <Link to="/table/mazandaran" style={{color: "black", textDecoration: "none"}}>
                مازندران 
                </Link>
                </td>
            </tr>
            <tr>
                <td>
                مرکزی
                </td>
            </tr>
            <tr>
                <td>
                هرمزگان 
                </td>
            </tr>
            <tr>
                <td>
                همدان
                </td>
            </tr>
            <tr>
                <td>
                یزد
                </td>
            </tr>
        </table>
        </div>
    );
}