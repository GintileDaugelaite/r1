import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

function Posts() {

    const [posts, setPosts] = useState(null);
    const [users, setUsers] = useState(null);
    const [pages, setPages] = useState(1);
    const [pageNow, setPageNow] = useState(1);

    const perPage = 20;

    useEffect(() => {
        const doShowIndex = i => {
            return (0 <= i && perPage > i);
        }
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data.map((p, i) => ({ ...p, show: doShowIndex(i) })))
            });
    }, []);

    useEffect(() => {
        const doShowIndex = i => {
            return (((pageNow - 1) * perPage) <= i && ((pageNow) * perPage) > i);
        }
        setPosts(po => po?.map((p, i) => ({ ...p, show: doShowIndex(i) })));

    }, [pageNow]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data));
    }, [])

    useEffect(() => {
        if (null === posts || 'undefined' === typeof posts) {
            return;
        }
        setPages(Math.ceil(posts.length / perPage));

    }, [posts]);


    const sortByTitle = () => {
        setPosts(p => [...p].sort((a, b) => b.title.length - a.title.length));
    }

    return (
        <>
            <div>
                <select value={pageNow} onChange={e => setPageNow(parseInt(e.target.value))}>
                    {
                        [...Array(pages)].map((_, i) => <option key={i} value={i + 1} >{i + 1} Page</option>)
                    }
                </select>
            </div>
            <ul>
                {
                    posts ? posts.map(p =>
                        p.show ? (<li className="users-list" key={p.id}>
                            <b>ID:{p.id} {p.title}</b>
                            <i>{users ? users.find(u => p.userId === u.id)?.name : '---loading---'}</i>
                        </li>) : null

                    )
                        : <li className="loader"></li>
                }
            </ul>
            <button onClick={sortByTitle}>Sort by title</button>
        </>
    );
}

export default Posts;