import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

export const getAppointement = createAsyncThunk(
    "getAppointement",
    async (userData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.get("/appointment")
            return data
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const addAppointement = createAsyncThunk(
    "addAppointement",
    async (appointmentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.post("/appointment", appointmentData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const updateAppointement = createAsyncThunk(
    "updateaddAppointement",
    async (appointmentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.put(`/appointment/${appointmentData.id}`, appointmentData)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })

export const deleteAppointement = createAsyncThunk(
    "deleteaddAppointement",
    async (appointmentData, { rejectWithValue, getState }) => {
        try {
            const { data } = await api.delete(`/appointment/${appointmentData.id}`)
            return true
        } catch (error) {
            return rejectWithValue(error.message || "something went wrong")
        }
    })