import PropTypes from 'prop-types';

const PhoneDetailsCard = ({ phone }) => {
    const { id, image, phone_name, brand_name, price, description } = phone || {};


    const handleAddToFavorite = () => {

        const addedFavoriteArray = [];

        const favoriteItems = JSON.parse(localStorage.getItem('favorites'));

        if (!favoriteItems) {
            addedFavoriteArray.push(phone);
            localStorage.setItem('favorites', JSON.stringify(addedFavoriteArray));
            alert("Product added");
        }
        else {
            const isExist = favoriteItems.find(phone => phone.id === id);
            if (!isExist) {
                addedFavoriteArray.push(...favoriteItems, phone);
                localStorage.setItem('favorites', JSON.stringify(addedFavoriteArray));
                alert("Product added");
            }
            else {
                alert('Already taken');
            }
        }
    }


    return (
        <div className='shadow-xl rounded-xl p-5 flex gap-5'>
            <div className='w-96'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h2 className='text-2xl font-bold my-2'>{phone_name}</h2>

                    <div className=' text-xl my-2'>
                        <p><span className='font-bold'>Brand Name:</span> {brand_name}</p>
                        <p><span className='font-bold mt-5'>Price:</span> {price}</p>
                        <p>{description}</p>
                    </div>

                    <div>
                        <button onClick={handleAddToFavorite} className='btn w-full my-5 text-red-600 font-bold'>Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

PhoneDetailsCard.propTypes = {
    phone: PropTypes.object,
};

export default PhoneDetailsCard;