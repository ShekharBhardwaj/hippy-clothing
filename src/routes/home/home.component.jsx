import "../../categories.styles.scss";
import { Outlet } from "react-router-dom";
import DirectoryComponent from "../../components/directory/directory.component";

const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "subtitle": "Shop Now!",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "subtitle": "Shop Now!",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "subtitle": "Shop Now!",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "subtitle": "Shop Now!",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "subtitle": "Shop Now!",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]

    return (
        <div>
            <Outlet />
            <DirectoryComponent categories={categories}/>
        </div>

    );
}

export default Home;
