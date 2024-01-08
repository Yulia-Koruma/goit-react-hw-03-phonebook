import { BtnDelete, ContactLi, ContactName } from "./ContactItem.styled"

export const ContactItem = ({onDelete, item: {id, name, number}}) => {
    return (
        <ContactLi>
            <ContactName>{name}: {number}</ContactName>
            <BtnDelete type="button" onClick={() => onDelete(id)}>Delete</BtnDelete>
        </ContactLi>
    )
}