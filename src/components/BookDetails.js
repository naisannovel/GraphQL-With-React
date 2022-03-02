import React from 'react';
import { getBookQuery } from '../queries/queries';
import { useQuery } from '@apollo/client';


const BookDetails = ({ selectedBook }) =>{

    // graphql query
    const { data, error, loading } = useQuery(getBookQuery,{ variables: { id: selectedBook } });

    console.log(data);
    // data : {
    //     books:{
    //         id: id,
    //         name: bookName,
    //         genre: genre
    //         author:{
    //             name: name,
    //             age: age,
    //             books:{
    //                 books list of this author
    //             }
    //         }
    //     }
    // }

    return (
        <div>
            <h1> This is Book Detail Component </h1>
        </div>
    )
}

export default BookDetails;