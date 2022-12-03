
export default function Recipe(props) {
    return (
      
      <div className= " p-10 grid grid-rows-4 grid-cols-5 gap-4 rounded-lg bg-gradient-to-r from-green-200 to-green-400   ">
        
        <div className=" text-center col-start-1 col-end-3 row-start-1 row-end-4 rounded-lg bg-red-500
         sm: "  >
            <h1 className=" p-2 text-3xl">{props.recipename}</h1>
            <img className=" scale-90 hover:scale-95 relative p-2 bg-purple-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src={props.recipeimage} alt="Nature"></img>
        </div>
        
        <div className="text-3xl text-center col-start-3 col-end-6 row-start-1 row-end-4 rounded-lg bg-yellow-500 ">
            <h1>Recipe Ingridients</h1>
            <li className=" p-6 text-xl">{props.ingdidient1}</li>
            <li className=" p-6 text-xl">{props.ingdidient2} </li>
            <li className=" p-6 text-xl">{props.ingdidient3} </li>
            <li className=" p-6 text-xl">{props.ingdidient4} </li>
            <li className=" p-6 text-xl">{props.ingdidient5} </li>
            <li className=" p-6 text-xl">{props.ingdidient6} </li>
            <li className=" p-6 text-xl">{props.ingdidient7} </li>
            <li className=" p-6 text-xl">{props.ingdidient8} </li>
            <li className=" p-6 text-xl">{props.ingdidient9} </li>
        </div>
        
        <div className="text-3xl text-center col-start-1 col-end-6 row-start-4 row-end-5 rounded-lg bg-green-500  ">
            <h1>Recipe Execution</h1>
            <h2 className="p-4 text-xl">
                {props.recipeexecution}
            </h2>

        </div>
        
        
      </div>
    )
  }