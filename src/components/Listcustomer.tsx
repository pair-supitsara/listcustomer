import classes from './Listcustomer.module.css'

interface ListcustomerProps {
    lists: {
        id: string;
        name: string;
    }[]
}

const Listcustomer: React.FC<ListcustomerProps> = ({ lists }) => {

    return (
        <div className={classes.container}>
            <h2>ลิสต์ลูกค้า</h2>
            <table>
                <tr>
                    <th>order</th>
                    <th>fullname</th>
                </tr>               
                {lists.map((item, index) => 
                <tr>
                    <td>{ index+1 }</td>
                    <td key={item.id}>{item.name}</td>
                </tr>)}
            </table>
        </div>
    );
}
  
export default Listcustomer;