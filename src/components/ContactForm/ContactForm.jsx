import { Formik} from 'formik';
import * as Yup from 'yup';
import { BtnAddContact, ErrorMsg, FormLabel, StyledField, StyledForm } from './ContactForm.styled';

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
    number: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
        message: 'Invalid Phone Number!',
        excludeEmptyString: false,
    })
    .required('Phone number is required!')
    .max(15, 'Invalid phone number!'),
});

export const ContactForm =({ onAdd }) => (
    <Formik
        initialValues={{
        name: '',
        number: '',
        }}
        
        validationSchema={validationSchema}

        onSubmit={(values, actions) => {
            onAdd(values);
            actions.resetForm();
        }}
    >
        <StyledForm>
            <FormLabel htmlFor="name">Name</FormLabel>
            <StyledField type="text" name="name" placeholder="John Smith" />
            <ErrorMsg name="name" component="div" />

            <FormLabel htmlFor="number">Number</FormLabel>
            <StyledField type="tel" name="number" placeholder="+380..." />
            <ErrorMsg name="number" component="div" />

            <BtnAddContact type="submit">Add contact</BtnAddContact>
        </StyledForm>
    </Formik>
);