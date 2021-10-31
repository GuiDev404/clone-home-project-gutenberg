import { useState , useEffect} from 'react';

export default function useApi(url = '') {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setResponse ] = useState(null);  
  const [ error, setError ] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then(response=> response.json())
      .then(setResponse)
      .catch(error=> setError(error))
      .finally(()=> setIsLoading(false))
  }, [url])

  return {
    data, 
    error, 
    isLoading
  }
}