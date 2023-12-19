'use client';

import { useState } from "react";
import { Input } from "./input";
import { Slider } from "./slider";
import { Button } from "./button";
import { RecipeResult } from "./recipeResult";
import complexSearch from "@/api/APIManager";
// import complexSearch from "@/api/APIManager";
// import complexSearch from '../../api/APIManager.js';

export const SearchForm = (({ className, ...props }, ref) => {
    const [search, setSearch] = useState("");
    const [slider, setSlider] = useState(3);
    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
        // call api to get recipes based on search and slider values

        const results = complexSearch(search, slider)
            .then((data) => {
                setResult(data);
            });
    };

    return (
        <>
            <form>
                <div className='space-y-4'>
                    <Input placeholder="Search for a recipe" onChange={e => setSearch(e.target.value)} value={search} />
                    <Slider defaultValue={[slider]} onChange={(e) => setSlider(e.target.value)} max={100} step={1} />
                    <Button variant="secondary" type="submit" onClick={handleSubmit}>Submit</Button>
                </div>
            </form>
            
            <div className="flex items-center">
                <RecipeResult results={result} />
            </div>
        </>
    );
});
