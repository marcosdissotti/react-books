import React, { useEffect, useState } from 'react'

import './styles.css'

import api from '../../services/api'


function Details({ match }){

    const [book, setBook] = useState({volumeInfo: {}})

    async function getBooks(){
        const response = await api.get(`volumes/${match.params.id}`)
        setBook(response.data)
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <main className="home">
            {console.log(book)}
            <div className="flex-container">
                <div className="livro-item">
                    <div className="left">
                        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}></img>
                    </div>
                    
                    <div className="right">
                        <p>{book.volumeInfo && book.volumeInfo.title}</p>
                        <p>by {book.volumeInfo && book.volumeInfo.authors }</p>
                        <p>{book.saleInfo && book.saleInfo.listPrice.amount}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Details