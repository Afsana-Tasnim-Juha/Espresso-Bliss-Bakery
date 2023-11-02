import { GrFormView } from 'react-icons/gr';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo, price } = coffee;



    const handleCoffeeDelete = _id => {
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

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);

                        }
                    })

            }
        })

    }
    return (
        <div className="card card-side bg-gray-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
            <div className=" flex w-full justify-between pr-4">
                <div className="pr-6">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-semibold">Quantity:</span>{quantity}</p>
                    <p> <span className="font-semibold">Supplier:</span>{supplier}</p>
                    <p> <span className="font-semibold">Price</span>{price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn bg-[#D2B48C] "><GrFormView className='text-2xl' ></GrFormView></button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn bg-[#3C393B]"><AiFillEdit className='text-2xl'></AiFillEdit></button>
                        </Link>
                        <button onClick={() => { handleCoffeeDelete(_id) }}

                            className="btn bg-[#EA4744]"><AiFillDelete className='text-xl'></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;