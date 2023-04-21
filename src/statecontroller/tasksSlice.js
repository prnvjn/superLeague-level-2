import { createSlice } from "@reduxjs/toolkit";

export const Tasks = createSlice({
  name: "tasks",
  initialState: {
    value: [
      {
        id: "64413d835d7117ea156eaab5",
        title: "test1",
        status: "Completed",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
      {
        id: "64413d835d7117ea156eacab5",
        title: "test2",
        status: "Pending",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
      {
        id: "64413d835dx7117ea156eaab5",
        title: "test3",
        status: "Pending",
        dueDate: "2023-04-30T00:00:00.000Z",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
    ],
    pendingTasks: [],
    completedTasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    removeTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id);
    },
    updateTask: (state, action) => {
      state.value.forEach((e) => {
        if (e.id === action.payload.id) {
          state.value[state.value.indexOf(e)].title = action.payload.title;
        }
      });
    },
    markComplete: (state, action) => {
      state.value.forEach((e) => {
        if (e.id === action.payload.id) {
          state.value[state.value.indexOf(e)].status = action.payload.status;
        }
      });
    },
    getall: (state) => {
      state.value = state.value;
    },
    getPending: (state) => {
      state.pendingTasks = state.value.filter(
        (task) => task.status === "Pending"
      );
    },
    getCompleted: (state) => {
      state.completedTasks = state.value.filter(
        (task) => task.status === "Completed"
      );
    },
    deleteCompleted: (state) => {
      state.value = state.value.filter((task) => task.status !== "Completed");
    },
  },
});
export const getTasks = (state) => state.tasks.value;
export const getPendingTasks = (state) => state.tasks.pendingTasks;
export const getCompletedTasks = (state) => state.tasks.completedTasks;

export const {
  addTask,
  removeTask,
  updateTask,
  markComplete,
  getall,
  getCompleted,
  getPending,
  deleteCompleted,
} = Tasks.actions;
export default Tasks.reducer;
