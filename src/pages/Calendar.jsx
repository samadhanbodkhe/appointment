import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import intaractionPlugin from '@fullcalendar/interaction'
import React, { useState } from 'react'

const Calendar = () => {
    const [task, setTask] = useState({
        title: "",
        date: ""
    })
    const [events, setEvents] = useState([
        { id: 1, title: "Timepass", date: "2023-10-09" },
        { id: 2, title: "Learn RTKQuery", date: "2023-10-10" },
    ])
    const [editData, setEditData] = useState({})
    const [index, setIndex] = useState()

    const handleDate = e => {
        // setEvents([...events, { title: "Fake Event", date: e.dateStr }])
        setTask({ ...task, date: e.dateStr, id: events.length + 1 })
        window.addTask.showModal()

    }
    const handleEvent = ({ event }) => {
        // console.log(event._instance.range.start)
        const d = new Date(event._instance.range.start)
        const year = d.getFullYear()
        const month = d.getMonth() + 1

        const day = d.getDate()
        // day = day < 10 ? `0${day}` : day
        const x = `${year}-${month >= 10 ? month : `0${month}`}-${day > 10 ? day : `0${day}`}`
        setEditData({ title: event._def.title, date: x })

        const i = events.findIndex(item => item.title === event._def.title)
        alert(i)
        setIndex(i)
        window.edit.showModal()

        // console.log(x);
        console.log(event._def.title)
    }

    const handleUpdate = e => {
        // const copy = [...events]
        const copy = [...events]
        console.log(copy[index]);
        copy[index] = { ...copy[index], ...editData }
        setEvents(copy)
    }
    return <>
        <FullCalendar
            plugins={[daygridPlugin, intaractionPlugin]}
            initialView='dayGridMonth'
            events={events}
            eventClick={handleEvent}
            dateClick={handleDate}
        />
        <dialog id="addTask" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Hello!</h3>
                <input type="text"
                    placeholder="Please Enter Task"
                    onChange={e => setTask({ ...task, title: e.target.value })}
                    className="input input-bordered w-full " />
                <br /><br />
                <button onClick={e => setEvents([...events, task])} className="btn btn-primary">Add Task</button>
            </form>
        </dialog>


        <dialog id="edit" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <h3 className="font-bold text-lg">Edit Task</h3>
                <input
                    value={editData.title}
                    onChange={e => setEditData({ ...editData, title: e.target.value })}
                    type="text"
                    placeholder="Type Here"

                    className="input input-bordered w-full " />
                <input
                    value={editData.date}
                    onChange={e => setEditData({ ...editData, date: e.target.value })}
                    type="date"
                    className="input input-bordered w-full " />
                <br /><br />
                <button onClick={handleUpdate} className="btn btn-primary w-full">Update Task</button>
                <button onClick={e => {
                    setEvents(events.filter((item, i) => i !== index))
                }} className="btn btn-error w-full">Delete Task</button>
            </form>
        </dialog>



    </>
}

export default Calendar