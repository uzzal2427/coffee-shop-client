
const AddCoffee = () => {
    const handleSubmitBtn = event =>{
        event.preventDefault();
        const form = event.target;

        const coffeeName = form.coffeeName.value;
        const chefName = form.chefName.value;
        const supplierName = form.supplierName.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detailsCoffee = form.detailsCoffee.value;
        const photo = form.photo.value;

        const AddNewCoffee = {coffeeName, chefName, supplierName, taste, category, detailsCoffee, photo};

        console.log(AddNewCoffee);

        fetch('http://localhost:3000/coffee',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(AddNewCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged == true){
                alert('New coffee added')
                form.reset()
            }
        })
    }

  
    return (
        <div className="p-10" style={{backgroundColor:'#F4F3F0'}}>
            <h2 style={{color:'#374151'}} className="text-3xl font-bold py-3">Add New Coffee</h2>
            <p className="w-3/4 text-center mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleSubmitBtn}>
                <div>
                    <div className="md:flex">
                        {/* name and chef row */}
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text font-bold"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-bold"> Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Chef Name" name="chefName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        {/* Supplier and Taste row */}
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text font-bold"> Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Supplier Name" name="supplierName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-bold"> Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        {/* Category and Details row */}
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text font-bold">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Category" name="category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-bold"> Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Details Info" name="detailsCoffee" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        {/* name and chef row */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold"> Coffee Photo </span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Photo url" name="photo" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block text-xl mt-5" style={{backgroundColor:"#D2B48C", color:"#331A15"}} />
            </form>
        </div>
    );
};

export default AddCoffee;