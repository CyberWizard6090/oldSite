
import { useEffect, useState } from 'react';
import ReadItem from '../components/ReadItem';
import { useNavigate } from 'react-router-dom'
const ReadsScreen = () => {

    const [posts, setPosts] = useState([]);
const history = useNavigate();
    let link: string;
    let link2: string;
    if (window.location.origin + "/News" == window.location.href) {
        link = 'news'
        link2 = "/readnews/"

    }
    if (window.location.origin + "/Prevention" == window.location.href) {
        link = 'prevention'
        link2 = "/readprevention/"
    }

    useEffect(() => {
        fetch('/api/' + link)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [history]);
    return (
        <div className="read__wrap">
            <div className="read__item__contener">
                {posts.map((item: any) => (
                    <ReadItem
                        date={item.date}
                        title={item.title}
                        nbut={"Читать далее"}
                        text={item.text}
                        src={item.image}
                        url={link2 + item.id}
                    />
                ))}

            </div>





        </div>
    )
}

export default ReadsScreen
