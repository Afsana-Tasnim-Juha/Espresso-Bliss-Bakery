import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo, price } = coffee;



    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;


        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo, price }

        console.log(updatedCoffee);

        //Send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })


    }


    return (
        <div>

            <div className="grid ">
                <div>
                    <Link className="font-bold " to={'/'}>
                        <button className="text-left" type="button">Back to home</button>
                    </Link>
                </div>

                <div className="bg-orange-50 p-24 m-40 mb-4">


                    <h2 className="text-[#374151] text-3xl font-extrabold">Update coffee :{name}</h2>


                    <form onSubmit={handleUpdateCoffee} className="mt-4">
                        {/*name and quantity*/}
                        <div className=" md:flex gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold ">
                                    <span className="label-text ">Coffee Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/*Supplier and Taste*/}
                        <div className="flex gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className=" input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label font-bold">
                                    <span className="label-text">Taste </span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="taste" defaultValue={taste} placeholder="Taste " className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/*Category and Details*/}
                        <div className="flex gap-4">
                            <div className="form-control md:w-1/3">
                                <label className="label font-bold">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3">
                                <label className="label font-bold">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/3 ">
                                <label className="label font-bold">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control md:w-full ">
                            <label className="label font-bold">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo url" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <input type="submit" value="Update Coffee" className="btn btn-block mt-4 bg-amber-700" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;