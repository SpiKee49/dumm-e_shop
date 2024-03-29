import React, {
  ChangeEvent,
  useCallback,
  useState,
} from 'react';
import { debounce } from 'lodash-es';
import { LocalAxios } from '../../api/axios';

const SEARCH_DEBOUNCE_TIMEOUT_MS = 1000;

function Search() {
  const [searchedValue, setSearchedValue] =
    useState<string>();

  const [results, setResults] = useState([]);

  const handleChange = useCallback(
    debounce(async (e: ChangeEvent<HTMLInputElement>) => {
      setSearchedValue(e.target.value);
      const response = await LocalAxios.get(
        '/products?name='
      );
      setResults(response.data);
    }, SEARCH_DEBOUNCE_TIMEOUT_MS),
    []
  );

  return (
    <div className="relative flex flex-col ">
      <input
        className="border-slate-400 focus:border-green-700 border-2 text-black"
        type="text"
        value={searchedValue}
        placeholder="Serach for product"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
