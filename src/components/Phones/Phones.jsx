import { useLoaderData } from "react-router-dom";
import Phone from "../Phone/Phone";

const Phones = () => {
    const phones = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                phones.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;