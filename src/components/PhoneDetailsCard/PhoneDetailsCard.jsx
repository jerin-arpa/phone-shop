import PropTypes from 'prop-types';

const PhoneDetailsCard = ({ phone }) => {
    const { image, phone_name, brand_name, price, description } = phone || {};

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
                        <button className='btn w-full my-5'>See Details</button>
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