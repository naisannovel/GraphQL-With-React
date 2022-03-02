import React, { useState } from "react";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

// graphql query
import { useQuery, useMutation } from '@apollo/client';

const AddBook = ()=>{

    // form data
    const [ formData, setFormData ] = useState(null);

    // graphql query
    const { loading, error, data } = useQuery(getAuthorsQuery);

    // graphql mutation
    const [ addBook, { data : newBookData , error: newBookAddedError , loading: newBookAddedLoading } ] = useMutation(addBookMutation);

    // form onChange handler
    const onChangeHandler = event =>{
        setFormData(prevData => ({ ...prevData, [event.target.name]: event.target.value }))
    }

    // form submit handler
    const submitHandler = event =>{
        event.preventDefault();
        addBook({
            variables: { ...formData },
            refetchQueries: [{ query: getBooksQuery }]
        })
        event.target.reset();
    }


    return (
        <div>
            <form onSubmit={event => submitHandler(event)}>

                <label htmlFor="name">Name</label>
                <input onChange={event=>onChangeHandler(event)} type="text" name="name" />

                <br/>
                <br/>

                <label htmlFor="genre">Genre</label>
                <input onChange={event=>onChangeHandler(event)} type="text" name="genre" />

                <br/>
                <br/>

                <select onChange={event=>onChangeHandler(event)} name="authorId">
                    <option> Select Author </option>
                    {
                        data && 
                        data.authors.map(item => <option key={item.id} value={item.id}> { item.name } </option> )
                    }
                </select>

                <br/>
                <br/>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}

export default AddBook;