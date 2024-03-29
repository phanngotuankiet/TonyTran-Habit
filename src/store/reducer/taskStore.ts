/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
export interface TaskSuggestion {
  tasks: { id: any; icon: any; label: any; color: any }[];
}

const initialState: TaskSuggestion = {
  tasks: JSON.parse(localStorage.getItem("tasks") ?? "[]"),
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(
      state,
      action: { payload: { icon: any; label: string; color: any } }
    ) {
      console.log("Add Task", addTask);
      const id = Math.random().toString(36).substring(2, 15);

      const tasks = [...state.tasks, { id, ...action.payload }];
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    removeTask(state, action: { payload: { id: any } }) {
      console.log("Remove Task ", removeTask);
      const tasks = state.tasks.filter((task) => {
        return task.id !== action.payload.id;
      });
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    // addSuggestion(
    //   state,
    //   action: { payload: { icon: any; label: string; color: any } }
    // ) {
    //   const tasks = [...state.tasks, action.payload];
    //   state.tasks = tasks;
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    // },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
