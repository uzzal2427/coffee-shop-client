

const AddCoffee = () => {
    return (
        <div>
            <h2>Add New Coffee</h2>
            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form>
                <div>
                    <div className="md:flex">
                        {/* name and chef row */}
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        {/* name and chef row */}
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        {/* name and chef row */}
                        <div className="form-control w-1/2 pr-4">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex">
                        {/* name and chef row */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Enter Your Coffee Name" name="coffeeName" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddCoffee;