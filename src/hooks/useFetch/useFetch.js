import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getDatas() {
    try {
      const {data: fetchedDatas} = await axios.get(url);
      setData(fetchedDatas);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    getDatas();
  }, []);

  return [data, loading, error];
}
