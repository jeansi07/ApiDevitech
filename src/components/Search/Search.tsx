import React, { useEffect } from "react";
import { useContextData } from "../../Context/dataContext/dataContext";
import Swal from "sweetalert2";
import Characters from "../Characters";


export const Search = () => {
    const Swal = require("sweetalert2");

    const { setCharacters, count, setSearch, search } = useContextData();

    useEffect(() => {
        getData();
    }, [count]);

    const getData = async () => {
        const res = await fetch(
            `https://rickandmortyapi.com/api/character?page=${count}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const response = await res.json();
        try {
            if (response) {
                setCharacters(response.results);
            } else {
                Swal.fire({
                    title: "Custom width, padding, color, background.",
                    width: 600,
                    padding: "3em",
                    color: "#716add",
                    background: "#fff url(/images/trees.png)",
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `,
                });
            }
        } catch (error) { }
    };

    



    return (
        <div className="container">
            <div className="justify-content-center m-4">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={getData}
                >
                    Search
                </button>
                <input 
                type="text" 
                id="search"
                name="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                />
            </div>
        </div>
    );
};

export default Search;
