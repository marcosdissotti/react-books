import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

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
        <main className="home">
            <div className="flex-container">
                {books.map(book => (
                    <Link to={`/details/${book.id}`} class="livro-item">
                        <img src={`${book.volumeInfo.imageLinks.thumbnail}`}></img>
                    </Link>
               ))} 
            </div>
        </main>
    );
}

export default Home