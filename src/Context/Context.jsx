import React, { useEffect, useReducer, useState } from "react";
import { useContext } from "react";
import axios from "axios";
const AppContext = React.createContext();
import reducer from "../Reducer/Reducer";

const API = "https://restaurant-booking-server.vercel.app/api/restaurant/get";

const initialState = {
  error: false,
  popularRes: [],
  AllRes: [],
  singleRes: {},
  filters: {
    search: "",
    tag: "All",
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      const AllRes = await res.data;
      dispatch({ type: "GET_ALL_DATA", payload: AllRes });
      // setResData(Data);
      // console.log(AllRes);
    } catch (error) {
      dispatch({ type: "GET_ERROR" });
    }
  };

  const getPopularData = async (url) => {
    try {
      const pres = await axios.get(url);
      const popularRes = await pres.data;
      dispatch({ type: "GET_POPULAR_DATA", payload: popularRes });
      // setResData(Data);
      // console.log(popularRes);
    } catch (error) {
      dispatch({ type: "GET_POPULAR_ERROR" });
    }
  };


  const getSinglePageData = async (id) => {
    try {
      const res = await axios.get(`${API}/${id}`);
      const singleData = await res.data;
      dispatch({ type: "SET_SINGLE_DATA", payload: singleData });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  const updatedFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "SEARCH_FILTER_VALUE" });
  }, [state.filters]);

  useEffect(() => {
    getData(API);
  }, []);

  useEffect(() => {
    getPopularData(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getData,
        getSinglePageData,
        API,
        updatedFilterValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
