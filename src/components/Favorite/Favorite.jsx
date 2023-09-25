import { useEffect, useState } from "react";
import PhoneDetailsCard from "../PhoneDetailsCard/PhoneDetailsCard";

const Favorite = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        if (favoriteItems) {
            setFavorites(favoriteItems);
        }
        else {
            setNoFound('no data found');
        }
    }, [])


    const handleRemove = () => {
        localStorage.clear;
        setFavorites([]);
        setNoFound('no data found');
    }

    return (
        <div>
            {noFound ? <p className="h-[80vh] justify-center items-center">{noFound}</p> : <div>
                <div className="flex justify-center">
                    {
                        favorites.length > 0 && <button onClick={handleRemove} className="btn my-5">Remove All Favorite</button>
                    }
                </div>
                <div>
                    {
                        isShow ? favorites.map(phone => <PhoneDetailsCard key={phone.id} phone={phone}></PhoneDetailsCard>)

                            : favorites.slice(0, 2).map(phone => <PhoneDetailsCard key={phone.id} phone={phone}></PhoneDetailsCard>)
                    }
                </div>

                {
                    favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="btn my-5">
                        {isShow ? "See less" : "See more"}
                    </button>
                }

            </div>};
        </div>
    );
};

export default Favorite;