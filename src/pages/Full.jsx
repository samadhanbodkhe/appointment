import FullCalendar from '@fullcalendar/react'
import daygridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAppointement, getAppointement } from '../redux/adminAction'

const Full = () => {
    const [data, setData] = useState({})
    const handleChange = e => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const { appointments, appointmentAdded } = useSelector(state => state.admin)
    const [selectedDate, setSelectedDate] = useState()
    const handleDateClick = e => {
        setSelectedDate(e.dateStr);
        window.my_modal_3.showModal()
    }
    const dispatch = useDispatch()

    const handleEventList = e => {
        // console.log(e.event._def.extendedProps);
        const { name, desc, time } = e.event._def.extendedProps
        return <div>
            <h6 className='text-blue-200 text-2xl'>{name}</h6>
            <span>{desc}:{time}</span>
        </div>
    }
    useEffect(() => {
        dispatch(getAppointement())
    }, [])
    useEffect(() => {
        if (appointmentAdded) {
            dispatch(getAppointement())
        }
    }, [appointmentAdded])
    return <>
        <FullCalendar
            plugins={[daygridPlugin, interactionPlugin]}
            initialView='dayGridMonth'
            dateClick={handleDateClick}
            events={appointments}
            eventContent={handleEventList}
        />


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

                <button onClick={e => dispatch(addAppointement({ ...data, date: selectedDate }))}
                    type="button" data-bs-dismiss="modal" class="btn btn-primary w-full mt-4">Add Appointment</button>
            </form>
        </dialog>



    </>
}

export default Full