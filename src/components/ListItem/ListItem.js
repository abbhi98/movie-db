import '../ListItem/ListItem.css'

const ListItem = ({selected,label,children}) =>{
    return (
        <li className={`menu-item ${selected ? 'selected-tab' : ''}`}>
            {children}
            <label>{label}</label>
        </li>
    )
}
export default ListItem