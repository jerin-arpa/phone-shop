import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Phone = ({ phone }) => {
    const { id, image, phone_name, brand_name, price, rating } = phone || {};

    return (
        <div className='shadow-xl rounded-xl p-5'>
            <div>
                <img className='w-full' src={image} alt="" />
            </div>
            <h2 className='text-2xl font-bold text-center my-2'>{phone_name}</h2>

            <div className='flex justify-center'>
                <div className="rating">
                    <input type="radio" name={rating} className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>

            <div className=' text-xl text-center my-2'>
                <p><span className='font-bold'>Brand Name:</span> {brand_name}</p>
                <p><span className='font-bold mt-5'>Price:</span> {price}</p>
            </div>

            <div>
                <Link to={`/phones/${id}`}>
                    <button className='btn w-full my-5'>See Details</button>
                </Link>
            </div>
        </div>
    );
};

Phone.propTypes = {
    phone: PropTypes.object,
};

export default Phone;