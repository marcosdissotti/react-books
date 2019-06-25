import React, { useEffect, useState, Fragment } from 'react'

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
        <Fragment>
            {console.log(book)}
            <div className="row-principal">
                <div className="column grow">
                    <div className="livro">
                        <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail}></img>
                    </div>
                </div>
                
                <div className="column grow">
                    <div className="describe">
                        <p>{book.volumeInfo && book.volumeInfo.title}</p>
                    </div>
                    <div className="row-item">
                        <p>by {book.volumeInfo && book.volumeInfo.authors}</p>
                    </div>
                    <div className="row-item">
                        <p>{book.saleInfo && book.saleInfo.listPrice.amount}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Details