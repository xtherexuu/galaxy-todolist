import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        content: "Posprzątać pokój",
        done: false,
        id: 0,
        tags: ["home", "important"],
        fromDate: new Date(),
        toDate: new Date(),
        remindingDates: [new Date(), new Date()],
      },
      {
        content: "Zakończyć robienie todolisty",
        done: true,
        id: 1,
        tags: ["work", "study"],
        fromDate: new Date(),
        toDate: new Date(),
        remindingDates: [new Date(), new Date()],
      },
    ],
  },
  reducers: {},
});
