import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointement, deleteAppointement, getAppointement } from '../redux/adminAction'
import { invalidate } from '../redux/adminSlice'

const Dashboard = () => {
    const [data, setData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const dispatch = useDispatch()
    const { appointments, appointmentAdded, appointmentUpdated, appointmentDeleted, loading, error }
        = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getAppointement())
    }, [])

    useEffect(() => {
        if (appointmentAdded) {
            dispatch(getAppointement())
            dispatch(invalidate())
        }
    }, [appointmentAdded])

    useEffect(() => {
        if (appointmentDeleted) {
            dispatch(getAppointement())
            dispatch(invalidate())
        }
    }, [appointmentDeleted])
    return <>
        <div>
            <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button>
        </div>

        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobail</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Desc</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments && appointments.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.desc}</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                            <button onClick={e => dispatch(deleteAppointement(item))} className='btn btn-error'>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>

                <input onChange={handleChange} name='name' type="text" placeholder="Enter Name" className=" my-2 input input-bordered w-full " />
                <input onChange={handleChange} name='email' type="email" placeholder="Enter email" className="my-2 input input-bordered w-full " />
                <input onChange={handleChange} name='mobile' type="number" placeholder="Enter mobile" className=" my-2 input input-bordered w-full " />
                <input onChange={handleChange} name='age' type="number" placeholder="Enter age" className=" my-2 input input-bordered w-full " />
                <input onChange={handleChange} name='desc' type="desc" placeholder="Enter desc" className=" my-2 input input-bordered w-full " />
                <input onChange={handleChange} name='date' type="date" placeholder="Enter date" className=" my-2 input input-bordered w-full " />
                <input onChange={handleChange} name='time' type="time" placeholder="Enter time" className=" my-2 input input-bordered w-full " />

                <input
                    onChange={handleChange}
                    value="male"
                    type="radio"
                    name="gender"
                    id='male'
                    className="radio radio-primary" />
                <label htmlFor="male">Male</label>

                <input

                    onChange={handleChange}
                    value="female"
                    type="radio"
                    name="gender"
                    id='female'
                    className="radio radio-primary" />
                <label htmlFor="female">Female</label>

                <button onClick={e => dispatch(addAppointement(data))} type="button" data-bs-dismiss="modal" class="btn btn-primary w-full mt-4">Add Appointment</button>
            </form>
        </dialog>



    </>
}

export default Dashboard