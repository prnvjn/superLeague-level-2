import { createSlice } from "@reduxjs/toolkit";

export const Tasks = createSlice({
  name: "tasks",
  initialState: {
    value: [
      {
        id: "64413d835d7117ea156eaab5",
        title: "test1",
        status: "Completed",
        dueDate: "2023-04-30",
        description:"My First Task This Week and Next Week and The Other Week Plus Next Month",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
      {
        id: "64413d835d7117ea156eacab5",
        title: "test2",
        status: "Pending",
        dueDate: "2023-04-30",
        description:"My First Task This Week and Next Week and The Other Week Plus Next Month",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
      {
        id: "64413d835dx7117ea156eaab5",
        title: "test3",
        status: "Pending",
        dueDate: "2023-04-30",
        description:"My First Task This Week and Next Week and The Other Week Plus Next Month",
        user: "k",
        createdAt: "2023-04-20T13:26:27.915Z",
        updatedAt: "2023-04-20T13:26:27.915Z",
        __v: 0,
      },
    ],
    pendingTasks: [ {
      id: "64413d835d7117ea156eacab5",
      title: "test2",
      status: "Pending",
      dueDate: "2023-04-30",
      description:"My First Task This Week and Next Week and The Other Week Plus Next Month",
      user: "k",
      createdAt: "2023-04-20T13:26:27.915Z",
      updatedAt: "2023-04-20T13:26:27.915Z",
      __v: 0,
    },
    {
      id: "64413d835dx7117ea156eaab5",
      title: "test3",
      status: "Pending",
      dueDate: "2023-04-30",
      description:"My First Task This Week and Next Week and The Other Week Plus Next Month",
      user: "k",
      createdAt: "2023-04-20T13:26:27.915Z",
      updatedAt: "2023-04-20T13:26:27.915Z",
      __v: 0,
    },],
    completedTasks: [{
      id: "64413d835d7117ea156eaab5",
      title: "test1",
      status: "Completed",
      dueDate: "2023-04-30",
      description:"My First Task This Week and Next Week and The Other Week Plus Next Month",
      user: "k",
      createdAt: "2023-04-20",
      updatedAt: "2023-04-20",
      __v: 0,
    },],
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
    markpendingComplete: (state, action) => {
      state.pendingTasks.forEach((e) => {
        if (e.id === action.payload.id) {
        state.pendingTasks[state.pendingTasks.indexOf(e)].status = action.payload.status; 
        }
      });
    },
    markCompletePending: (state, action) => {
      state.completedTasks.forEach((e) => {
        if (e.id === action.payload.id) {
        state.completedTasks[state.completedTasks.indexOf(e)].status = action.payload.status; 
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
    deleteFromPending: (state,action) => {
      state.pendingTasks = state.pendingTasks.filter((task) => task.id !== action.payload.id);
    },
    deleteFromCompleted: (state,action) => {
      state.completedTasks = state.completedTasks.filter((task) => task.id !== action.payload.id);
    },

  },
});
export const getTasks = (state) => state.tasks.value;
export const getPendingTasks = (state) =>   state.tasks.pendingTasks 
;
export const getCompletedTasks = (state) => state.tasks.completedTasks

 


export const {
  addTask,
  removeTask,
  updateTask,
  markComplete,
  getall,
  getCompleted,
  getPending,
  deleteCompleted,
  deleteFromCompleted,deleteFromPending,
  markCompletePending,
  markpendingComplete
} = Tasks.actions;
export default Tasks.reducer;
