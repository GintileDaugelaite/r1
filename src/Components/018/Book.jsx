import { useContext, useState } from "react"
import BooksContext from "./BooksContext";


function Book({ book, type }) {

    const { addToCart } = useContext(BooksContext);
    const [count, setCount] = useState(1);

    const addToCartLocal = (id, c) => {
        setCount(1);
        addToCart(id, c);
    }
    const goUp = () => {
        setCount(c => c + 1);
    }

    const goDown = () => {
        setCount(c => Math.max(1, c - 1)); //padaro, kad max vienetas gali but, t.y. neis zemiau nulio
    }

    return (


        <div className="card-container" key={book.id}>

            <h3>{book.title}</h3>
            <img src={book.img} alt={book.title} />
            <h3>{book.author}</h3>
            <h4 className="type">{type ? type.find(t => book.type === t.id)?.title : '---loading---'}</h4>
            <div className="price">{book.price} EUR</div>
            <span>
                <button onClick={() => addToCartLocal(book.id, count)} className="red">Pirkti</button>
                <button className="btn" onClick={goUp}>+</button>
                <span className="qty">{count}</span>
                <button className="btn" onClick={goDown}>−</button>
            </span>
            {/* pridedam book'o id, kai paspaudziam mygtuka         <span><button onClick={() => setCart(c => [...c, {id: book.id}])} className="red">Pirkti</button></span>*/}

        </div>

    );

}

export default Book;