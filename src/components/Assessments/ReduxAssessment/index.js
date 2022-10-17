import React, { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../../../context/GlobalContext";
import ReactAssessmentTable from "./ReduxAssessmentTable";
import { getList } from "../../../features/cakesAPI";

export default function ReduxAssessment() {
  const isMounted = useRef(true);
  const [keyword, setKeyword] = useState("");
  const { results, setResult } = useContext(GlobalContext);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!keyword) {
      setFiltered(results);
      return;
    }

    const temp = results.filter(
      (cake) => cake.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    );
    setFiltered(temp);
  }, [keyword, results]);

  useEffect(() => {
    const getCakeList = async () => {
      const result = await getList();
      setResult(result.data.cakes);
    };

    isMounted.current && getCakeList();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
        2. Redux, API HTTP calls and JS scripting
      </h3>
      <p className="subpixel-antialiased w-fit m-2">
        In this second test we will try out your skills in using Redux and
        making HTTP request to an API. For the precise directions, please refer
        to the README!
      </p>
      <div>
        <span>Input keyword = </span>
        <input
          className="border border-1 border-solid"
          defaultValue={keyword}
          onKeyDown={(e) =>
            e.keyCode === 13 && setKeyword(e.currentTarget.value)
          }
        />
      </div>
      <ReactAssessmentTable rows={filtered} />
    </div>
  );
}
