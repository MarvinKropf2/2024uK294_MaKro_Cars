

function CarPage() {

    type CarType = {
        Name: string,
        Miles_per_Gallon: number,
        Cylinders: number,
        Displacement: number,
        Horsepower: number,
        Weight_in_lbs: number,
        Acceleration: number,
        Year: string,
        Origin: string,
        id: number
    }
  
  
  
  
        
  
    return (
     <div id="app">
         {cars.map((car, index) => (
          <p className="center" key={index}>
              Car Name: {car.Name} <br></br>
              Miles per Gallon: {car.Miles_per_Gallon} <br></br>
              Cylinders: {car.Cylinders} <br></br>
              Displacement: {car.Displacement} <br></br>
              Horsepower: {car.Horsepower} <br></br>
              Weight in lbs: {car.Weight_in_lbs} <br></br>
              Acceleration: {car.Acceleration} <br></br>
              Year: {car.Year} <br></br>
              Origin: {car.Origin} <br></br>
              ID: {car.id} <br></br>
          </p>
         ))}
     </div>
    );
  }
  
  
   
  
  
  export default CarPage;
  
  
  