import React from 'react';
import { getBooksQuery } from '../queries/queries';

// graphql query
import { useQuery } from '@apollo/client';

const BookList = ({ setSelectedBook })=>{

    // query
    const { loading, error, data } = useQuery(getBooksQuery)

    return (
        <div>
            <h3>BookList</h3>
            <ul>
                {
                    data && 
                    data.books.map(item => <li onClick={()=>setSelectedBook(item.id)} key={item.id}> { item.name } </li> )
                }
            </ul>
        </div>
    )
}

export default BookList;