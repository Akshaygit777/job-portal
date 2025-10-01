import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    companies: [],        // initialize as empty array
    singleCompany: null,
  },
  reducers: {
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
  },
});

export const { setCompanies, setSingleCompany } = companySlice.actions;
export default companySlice.reducer;
