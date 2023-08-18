

const MyTable=(props)=>
{
    return(
        <>
        <tr>
        <td>{props.nm}</td>
        <td>{props.btc}</td>
        <td>{props.ct}</td>
        <td>{props.fs}</td>
        </tr>
        </>
    )
}
export default MyTable;