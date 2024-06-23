import { Suspense, useState } from "react"



function MyComponent() {
    const [cars, setCars] = useState(["s", "m", "a"]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(event) {
        // const newCars = document.getElementById("listNewCar").value;
        // setCars(event.target.value)


        setCars([...cars, newCars])
    }

    function handleCarYear(event) {
        setCarYear(event.target.value)
    }

    function handleCarMake(event) {
        setCarMake(event.target.value);
    }

    function handleCarModel(event) {
        setCarModel(event.target.value)
    }

    function handleRemoveCar() {

    }


    return(<div>
            <h1>List of Car Objects</h1>
                {/* <ul>{cars.map((car, index ) => <li
                     id="listNewCar">{car}</li>)}
                    </ul> */}

                    <ul><li>{cars}</li></ul>

                    <input type="number" placeholder="Enter car year" value={carYear} onChange={handleCarYear}/> <br/>
                    <input type="text" placeholder="Enter car make" value={carMake} onChange={handleCarMake}/> <br/>
                    <input type="text" placeholder="Enter car model" value={carModel} onChange={handleCarModel}/> <br/>

                    <button onClick={handleAddCar}>AddCar</button>

          </div>)
}

export default MyComponent