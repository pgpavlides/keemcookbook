
export default function Recipe(props) {
    return (
      
      <div className= " p-10 flex flex-col space-y-4 rounded-lg bg-zinc-800 border-4 border-zinc-700 ">
        
        <div className=" text-center rounded-lg  bg-emerald-500 border-4 border-zinc-700"  >
            <h1 className=" underline p-4 font-bold text-3xl ">{props.recipename}</h1>
            <img className="p-2 -my-5  bg-green-900 scale-75  " src={props.recipeimage} alt="Nature"></img>
        </div>
        
        <div className=" p-2 text-3xl text-center rounded-lg bg-teal-700 border-4 border-zinc-700 ">
            <h1 className=" underline font-bold p-4 ">ΥΛΙΚΑ</h1>
            <li className=" p-1 text-xl">{props.ingdidient1}</li>
            <li className=" p-1 text-xl">{props.ingdidient2} </li>
            <li className=" p-1 text-xl">{props.ingdidient3} </li>
            <li className=" p-1 text-xl">{props.ingdidient4} </li>
            <li className=" p-1 text-xl">{props.ingdidient5} </li>
            <li className=" p-1 text-xl">{props.ingdidient6} </li>
            <li className=" p-1 text-xl">{props.ingdidient7} </li>
            <li className=" p-1 text-xl">{props.ingdidient8} </li>
            <li className=" p-1 text-xl">{props.ingdidient9} </li>
        </div>
        
        <div className="text-3xl text-center rounded-lg bg-emerald-500 border-4 border-zinc-700  ">
            <h1 className="underline font-bold p-4">ΕΚΤΕΛΕΣΗ</h1>
            <h2 className="p-4 text-xl">
                {props.recipeexecution}
            </h2>

        </div>

        <div className="text-3xl text-center rounded-lg bg-red-700 border-4 border-zinc-700  ">
            <h1 className="underline font-bold p-4">ΠΑΡΑΤΗΡΗΣΕΙΣ</h1>
            <h2 className="p-4 text-xl">
                {props.recipecomment}
            </h2>

        </div>
        
        
      </div>
    )
  }