import React from 'react';
//Styles

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [dataWithFilter, setDataWithFilter] = React.useState([]);
  const [filtering, setFiltering] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge',
      );
      const data = await response.json();
      setData(data);
      setDataWithFilter(data);
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

  return (
    <GlobalContext.Provider
      value={{
        setData,
        data,
        renderDataWithFilter,
        loading,
        setLoading,
        dataWithFilter,
        setDataWithFilter,
        filtering,
        setFiltering,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
