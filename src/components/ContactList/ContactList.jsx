import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map(item => (
                <ContactItem key={item.id} onDelete={onDelete} item={item } />
               
            ))}
        </ul>
    )
};