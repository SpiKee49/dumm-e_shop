import React, {
  ChangeEvent,
  useEffect,
  useState,
} from 'react';
import { useDebounce } from 'use-debounce';
import { LocalAxios } from '../../api/axios';

interface Product {
  id: number;
  name: string;
  thumbnail: {
    type: string;
    data: ArrayBuffer;
  };
  thumbnail_name: string;
}

const SEARCH_DEBOUNCE_TIMEOUT_MS = 1000;

function Search() {
  const [searchedValue, setSearchedValue] =
    useState<string>();

  const [debouncedSearch] = useDebounce(
    searchedValue,
    SEARCH_DEBOUNCE_TIMEOUT_MS
  );
  const [results, setResults] = useState<Array<Product>>(
    []
  );

  const fetchSearched = async (value: string) => {
    if (value === '') {
      setResults([]);
      return;
    }

    try {
      const response = await LocalAxios.get(
        `/product-safe?name=${value}`
      );
      setResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSearchedValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearch !== undefined)
      fetchSearched(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="relative flex flex-col gap-3">
      <input
        className="border-slate-400 focus:border-green-700 border-2 text-black p-2 rounded-md"
        type="text"
        value={searchedValue}
        placeholder="Serach for product"
        onChange={e => handleChange(e)}
      />
      {results.length > 0 && (
        <div className="absolute top-[2em] left-0 w-full border-2 shadow-md rounded-md shadow-black bg-white">
          {results.map(item => {
            return (
              <div
                key={item.id}
                className="flex h-[40px] w-full items-center hover:bg-slate-200 hover:cursor-pointer"
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
