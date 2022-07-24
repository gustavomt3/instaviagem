import React from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
  whishilist: localStorage.getItem('whishilist')
    ? JSON.parse(localStorage.getItem('whishilist'))
    : [],
};

//Create Context
export const GlobalContext = React.createContext(initialState);

//Provider Components
export const GlobalProvider = (props) => {
  //Storage
  const [state, dispatch] = React.useReducer(AppReducer, initialState);
  //Fetch
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [dataWithFilter, setDataWithFilter] = React.useState([]);
  const [filtering, setFiltering] = React.useState(false);

  //Fetch
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge',
      );
      const data = await response.json();
      const dataAlf = data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setData(dataAlf);
      setDataWithFilter(dataAlf);
    } catch (err) {
      console.log('error', err);
    } finally {
      setLoading(false);
    }
  };

  const renderDataWithFilter = (filter) => {
    const withFilter = data.filter((x) => x.type === filter);
    setDataWithFilter(withFilter);
    setFiltering(!filtering);
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (!filtering) {
      setDataWithFilter(data);
    }
  }, [filtering]);

  //Storage
  React.useEffect(() => {
    localStorage.setItem('whishilist', JSON.stringify(state.whishilist));
  }, [state]);

  //actions
  const funcWhishilist = (data) => {
    let storeWhishilist = state.whishilist.find(
      (item) => item._id === data._id,
    );
    const whishilistDisabled = storeWhishilist ? true : false;

    if (!whishilistDisabled) {
      dispatch({ type: 'ADD_CARD_TO_WISHILIST', payload: data });
    } else {
      dispatch({ type: 'REMOVE_CARD_TO_WISHILIST', payload: data._id });
    }
  };

  //Modal
  const [modalCard, setModalCard] = React.useState(null);

  return (
    <GlobalContext.Provider
      value={{
        whishilist: state.whishilist,
        funcWhishilist,
        modalCard,
        setModalCard,
        data,
        setData,
        loading,
        dataWithFilter,
        renderDataWithFilter,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
