import React, { createContext, useContext, useState } from "react";
import axios from 'axios'

export type yearDatacontextcontent = {
    yearData: string,
    getApiData:(enteredYear:number | null)=>void
}

export const yearcontext = createContext<yearDatacontextcontent>({
    yearData: '',
    getApiData:()=>{}
});

export const useYearContext = () => useContext(yearcontext);

const YearContext = ({children}:{ children:JSX.Element }) => {
    
    const [yearData, setYearData] = useState<string>('');
    
    
    const getApiData = async (enteredYear:number | null) => {
        try {
            let random: number | null = enteredYear;
            let URL: string = `http://numbersapi.com/${random}/year`;
            
            const response = await axios.get(URL);
            console.log(response);
            setYearData(response.data);
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <yearcontext.Provider value={{yearData,getApiData}}>
            {children}
        </yearcontext.Provider>
    )
}

export default YearContext;