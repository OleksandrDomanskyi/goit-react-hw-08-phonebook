import { createAsyncThunk } from "@reduxjs/toolkit";

import * as services from '../../shared/services/users';

export const signup = createAsyncThunk(
    "user/signup",
    async (data, { rejectWithValue }) => {
        try {
            const user = await services.signup(data);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "user/login",
    async (data, { rejectWithValue }) => {
        try {
            const user = await services.login(data);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getCurrentUser = createAsyncThunk(
    "user/current",
    async (_, { rejectWithValue, getState }) => {
        try {
            const { user } = getState();
            const { token } = user;
            const currentUser = await services.getCurrent(token);
            return currentUser;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            const user = await services.logout();
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);