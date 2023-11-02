
import Swal from 'sweetalert2'
const AddPastry = () => {
    const handleAddPastry = event => {
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

        const newPastry = { name, quantity, supplier, taste, category, details, photo, price }

        console.log(newPastry);

        fetch('http://localhost:5000/pastry', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPastry),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })
    }
    return (
        <div className="bg-orange-50 p-24">
            <h2 className="text-[#374151] text-3xl font-extrabold"> Indulge Your Senses in Our Delectable Pastries!</h2>
            <p className="text-[#374151] text-sm mt-4" >At Sweet Delights, we believe in turning every moment into a sweet memory. Our pastries are crafted with love, using only the finest ingredients to ensure a delightful experience with every bite.</p>

            <form onSubmit={handleAddPastry} className="mt-4">
                {/*name and quantity*/}
                <div className=" md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold ">
                            <span className="label-text ">Pastry Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Pastry Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" />
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

                            <input type="text" name="supplier" placeholder="Supplier" className=" input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label font-bold">
                            <span className="label-text">Taste </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" placeholder="Taste " className="input input-bordered w-full" />
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

                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label font-bold">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ">
                        <label className="label font-bold">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control md:w-full ">
                    <label className="label font-bold">
                        <span className="label-text">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="Photo url" className="input input-bordered w-full" />
                    </label>
                </div>


                <input type="submit" value="Add Pastry" className="btn btn-block mt-4 bg-amber-700" />
            </form>
        </div>
    );
};

export default AddPastry;