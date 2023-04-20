import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import login from '../services/login'

export const Tasks = createSlice({
  name: "tasks",
  initialState: {
    value: [
      {
        _id: "64406ad25f3132606236af82",
        title: "take a loaf",
        status: "Pending",
        user: "John",
        createdAt: "2023-04-19T22:27:30.310Z",
        updatedAt: "2023-04-19T22:49:56.003Z",
        __v: 0,
      },
      {
        _id: "64413d835d7117ea156eaab5",
        title: "test1",
        status: "test1",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
      {
        _id: "64413db25d7117ea156eaab8",
        title: "task1",
        status: "pending",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "john",
        createdAt: "2023-04-20T13:27:14.569Z",
        updatedAt: "2023-04-20T13:27:14.569Z",
        __v: 0,
      },
      {
        _id: "64413dbb5d7117ea156eaabb",
        title: "task2",
        status: "pending",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "john",
        createdAt: "2023-04-20T13:27:23.079Z",
        updatedAt: "2023-04-20T13:27:23.079Z",
        __v: 0,
      },
      {
        _id: "64413dc75d7117ea156eaabe",
        title: "task3",
        status: "pending",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "john",
        createdAt: "2023-04-20T13:27:35.025Z",
        updatedAt: "2023-04-20T13:27:35.025Z",
        __v: 0,
      },
      {
        _id: "64413dda5d7117ea156eaac1",
        title: "task4",
        status: "completed",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "john",
        createdAt: "2023-04-20T13:27:54.304Z",
        updatedAt: "2023-04-20T13:27:54.304Z",
        __v: 0,
      },
      {
        _id: "64413de35d7117ea156eaac4",
        title: "task5",
        status: "completed",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "john",
        createdAt: "2023-04-20T13:28:03.132Z",
        updatedAt: "2023-04-20T13:28:03.132Z",
        __v: 0,
      },
      {
        _id: "64413de95d7117ea156eaac7",
        title: "task6",
        status: "completed",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "john",
        createdAt: "2023-04-20T13:28:09.230Z",
        updatedAt: "2023-04-20T13:28:09.230Z",
        __v: 0,
      },
    ],
  },
  reducers: {
    addTask: (state, action) => {
       state.value.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks.forEach((e) => {
        if (e.id === action.payload.id) {
          state.tasks.push(e);
        }
      });
    },
    updateTask: (state, action) => {
      state.tasks.forEach((e) => {
        if (e.id === action.payload.id) {
          state.tasks[state.tasks.indexOf(e)].title = action.payload.title;
        }
      });
    },
    markComplete: (state, action) => {
      state.tasks.forEach((e) => {
        if (e.id === action.payload.id) {
          state.tasks[state.tasks.indexOf(e)].status = action.payload.status;
        }
      });
    },
  },
});
export const getTasks = (state) => {
console.log(login.fetchTasks())
};

export const { addTask, removeTask, updateTask, markComplete } = Tasks.actions;
export default Tasks.reducer;
