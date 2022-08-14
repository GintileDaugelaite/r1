import axios from "axios";
import { useState, useEffect } from "react";
import Book from "./Book";
import BookContext from "./BooksContext";


function Books() {

    const [books, setBooks] = useState(null);
    const [type, setType] = useState(null);
    const [cat, setCat] = useState(0);
    const [sort, setSort] = useState(0);
    const [cart, setCart] = useState([]);




    useEffect(() => {

        axios.get('https://in3.dev/knygos/')
            .then(res => setBooks(res.data.map((b, i) => ({
                ...b,
                show: true,
                row: i
            }))));

    }, [])

    useEffect(() => {
        setBooks(b => b?.map(book => ({
            ...book,
            show: (cat === 0 || cat === book.type ? true : false
            )
        })))
    }, [cat]) //filtravimas

    useEffect(() => {

        axios.get('https://in3.dev/knygos/types/')
            .then(res => setType(res.data));

    }, []);

    // const sortByPriceUp = () => {
    //     setBooks(b => [...b].sort((a, b) => b.price - a.price));
    // }

    // const sortByPriceDown = () => {
    //     setBooks(b => [...b].sort((a, b) => a.price - b.price))
    // }

    // const sortDefault = () => {
    //     setBooks(b => [...b].sort((a, b) => a.id - b.id));
    // }

    useEffect(() => {
        switch (sort) {
            case 0:
                setBooks(b => b ? [...b].sort((a, b) => a.row - b.row) : null);
                break;
            case 1:
                setBooks(b => b ? [...b].sort((a, b) => a.price - b.price) : null);
                break;
            case 2:
                setBooks(b => b ? [...b].sort((a, b) => b.price - a.price) : null);
                break;
            default:
        }

    }, [sort]); // sortinimas su select'u


    const addToCart = (id, count) => {
        setCart(c => {
            const inCart = c.find(b => b.id === id);

            if (!inCart) {
                return [...c, { id, count: count }]
            }
            return c.map(b => b.id === id ? { ...b, count: b.count + count } : { ...b })
        })
    }

    const removeBook = id => {
       
            setCart(c => c.filter(boo => boo.id !== id));
    }

    return (
        <>
            <BookContext.Provider value={{
                addToCart
            }}>
                <div className="cart-bin">
                    <div className="cart">

                        <svg>
                            <use href="#cart"></use>
                        </svg>
                        <span>{cart.length}</span>
                        <div className="cart-list">
                            {
                                cart.map((b, i) => <div key={i}>
                                    {books?.find(bo => bo.id === b.id).title}
                                    <i>{b.count}</i>
                                    <b onClick={() => removeBook(b.id)}>x</b>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                {type ?

                    <div className="container">
                        <select value={cat} onChange={e => setCat(parseInt(e.target.value))}>
                            <option value="0">Visos</option>
                            {
                                type?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                            }
                        </select>
                    </div> : null
                }
                <div className="container">
                    <select value={sort} onChange={e => setSort(parseInt(e.target.value))}>
                        <option value="0">Pradinis</option>
                        <option value="1">Kaina min-max</option>
                        <option value="2">Kaina max-min</option>
                    </select>

                </div>


                <div className="book-list">
                    {
                        books ? books.map(b =>
                            b.show ? <Book key={b.id} book={b} type={type}></Book>
                                : null
                        ) : <li className="loader"></li>
                    }

                </div>
                {/* <div className="container">
                <button onClick={sortByPriceUp}>Kaina d-m</button>
                <button onClick={sortByPriceDown}>Kaina m-d</button>
                <button onClick={sortDefault}>Default</button>
            </div> */}
            </BookContext.Provider>
        </>
    );
}

export default Books;