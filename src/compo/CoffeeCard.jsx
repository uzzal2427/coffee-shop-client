
const CoffeeCard = ({ coffee }) => {
    const { coffeeName, chefName, supplierName, taste, category, detailsCoffee, photo } = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-52" src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;