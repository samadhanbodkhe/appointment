import { createSlice } from "@reduxjs/toolkit";
import { addAppointement, deleteAppointement, getAppointement, updateAppointement } from "./adminAction";

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: {},
    reducers: {
        invalidate: (state, { payload }) => {
            state.appointmentAdded = false
            state.appointmentUpdated = false
            state.appointmentDeleted = false
        }
    },
    extraReducers: builder => builder
        .addCase(getAppointement.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(getAppointement.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointments = payload
        })
        .addCase(getAppointement.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(addAppointement.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(addAppointement.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointmentAdded = true
        })
        .addCase(addAppointement.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(updateAppointement.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(updateAppointement.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointmentUpdated = true
        })
        .addCase(updateAppointement.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

        .addCase(deleteAppointement.pending, (state, { payload }) => {
            state.loading = true
        })
        .addCase(deleteAppointement.fulfilled, (state, { payload }) => {
            state.loading = false
            state.appointmentDeleted = true
        })
        .addCase(deleteAppointement.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        })

})

export const { invalidate } = adminSlice.actions
export default adminSlice.reducer