import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UniversalPage = () => {
    const [posts, setPosts] = useState([]);

    const { IDpage } = useParams()


    useEffect(() => {
        fetch('/api/page/' + IDpage)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const listarticle = posts.map((item: any) => {

        switch (item.type) {
            case "header": return
            case "subtitle": return
            case "text": return
            case "image": return
            case "images": return
            case "list": return
            case "pdf": return
            case "table": return
            case "download": return
        }
    })
    return (
        <div>UniversalPage</div>
    )
}

export default UniversalPage