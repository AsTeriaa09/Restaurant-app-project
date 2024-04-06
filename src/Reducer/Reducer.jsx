const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_DATA":
      return {
        ...state,
        AllRes: action.payload,
      };
    case "GET_ERROR":
      return {
        ...state,
        error: true,
      };
    case "GET_POPULAR_DATA":
      return {
        ...state,
        popularRes: action.payload,
      };
    case "GET_POPULAR_ERROR":
      return {
        ...state,
        error: true,
      };
    case "SET_SINGLE_DATA":
      return {
        ...state,
        singleRes: action.payload,
      };
    case "SINGLE_ERROR":
      return {
        ...state,
        error: true,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "SEARCH_FILTER_VALUE":
      let { popularRes, AllRes } = state;
      let tempfilter = [...popularRes];
      let tempTagfilter = [...AllRes];
      const { search, tag } = state.filters;
      if (search) {
        tempfilter = tempfilter.filter((cur) => {
          return cur.name.toLowerCase().includes(search);
        });
      }
      if (tag !== "All") {
        tempTagfilter = tempTagfilter.filter((cur) => {
          return cur.tag === tag;
        });
      }
      return {
        ...state,
        popularRes: tempfilter,
        AllRes: tempTagfilter, 
      };

    default:
      return state;
  }
};

export default ProductReducer;
