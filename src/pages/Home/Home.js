import React, { useEffect, useState } from 'react'

import api from '../../services/api'


function Home(){

    const [books, setBooks] = useState([])

    async function getBooks(){
        const response = await api.get('volumes?q=SEARCH_TERM')
        setBooks(response.data.items)
        console.log(response.data.items)
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <main>
            <div>
            {books.map(book => (
                 <img src={`${book.volumeInfo.imageLinks.thumbnail}`}></img>
               ))} 
            </div>
        </main>
    );
}

export default Home