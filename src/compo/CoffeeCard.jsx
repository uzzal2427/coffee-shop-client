import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, chefName, supplierName, taste, category, detailsCoffee, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side p-8 shadow-xl bg-[#F5F4F1]">
                <figure><img className="w-52 h-52" src={photo} /></figure>
                <div className="flex justify-between items-center">
                    <div className="card-body">
                        <h2 className="card-title">{coffeeName}</h2>
                        <h2 className="card-title">{supplierName}</h2>
                        <h2 className="card-title">{taste}</h2>
                    </div>
                    <div className="card-actions justify-end flex-col">
                        <button className="btn btn-outline btn-warning">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-outline btn-warning">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;