import { useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import reactLogo from './assets/react.svg'
import TailwindCSSButton from './components/TailwindCSSButton.jsx'
import Card from './components/Card.jsx'
import Recipe from './components/Recipe.jsx'
import './App.css'



// console.log(Recipe);

function App() {

  
  
  const [count, setCount] = useState(0)



  return (
    <div className="text-[40px] text-center">
      <h1 className="font-bold"> Βιβλιο Συνταγων ΚΕΕΜ 3ο Ταγμα </h1>

      <div className="text-[20px] text-left container p-4 grid grid-cols-auto gap-4 xl:flex xl:flex-wrap xl:place-content-center"  >
              
              
            
              {/* <Card 
              title="ΧΟΙΡΙΝΟ ΜΕ ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ"
              time="40'"
              ingridientamount="7"
              peopleamount="100"
              difficulty="Easy"
              color="bg-green-400"
              /> 
              <Card 
              title="Pastitsio"
              time="20"
              ingridientamount="12"
              peopleamount="100"
              difficulty="Hard"
              color="bg-red-400"
              />
              <Card 
              title="Xalvas"
              time="20"
              ingridientamount="12"
              peopleamount="100"
              difficulty="Medium"
              color="bg-yellow-400"
              />
              <Card 
              title="Xalvas"
              time="20"
              ingridientamount="12"
              peopleamount="100"
              difficulty="Medium"
              color="bg-yellow-400"
              />
              <Card 
              title="Xalvas"
              time="20"
              ingridientamount="12"
              peopleamount="100"
              difficulty="Medium"
              color="bg-yellow-400"
              /> */}
                          
        
      </div>
      <div className="container"  >
              <Recipe
              recipename="ΧΟΙΡΙΝΟ ΜΕ ΠΑΤΑΤΕΣ ΦΟΥΡΝΟΥ"
              recipeimage="https://www.giorgostsoulis.com/media/k2/items/cache/68b62085e41e8f225811766f8d5eb2bb_L.jpg"
              recipeexecution="Κόβετε το χοιρινό σε μερίδες. Το πλένετε και το στραγγίζετε. Καθαρίζετε τις πατάτες τις πλένετε και τις κόβετε
              μακρόστενες κυδωνάτες. Βάζετε σε λαμαρίνες το χοιρινό και τις πατάτες, τους ρίχνετε το λάδι, αλάτι, πιπέρι, ρίγανη, χυμό λεμόνι
              και με καθαρά χέρια τις ανακατεύετε. Από μια γωνία της λαμαρίνας ρίχνετε λίγο νερό, 1/4 στο ύψος της λαμαρίνας και βάζετε
              τις λαμαρίνες στο φούρνο να ψυθούν σε θερμοκρασία 200 βαθμούς. Το κρέας το γυρίζουμε και από τις 2 πλευρές για να πάρει χρώμα και να
              ψηθεί "
              recipecomment="Το χοιρινό ψητό με πατάτες φούρνου πρέπει, οταν ψηθεί, να είναι με πολύ λίγα υργά. 
              Μπορούμε να ψήσουμε χωριστά το κρέας απο τις πατάτες και τα υγρά από το ψημένο κρέας να τα χρησημοποιήσουμε στις πατάτες και 
              συμπληρώνουμε εάν χρειάζεται λίγο νερό.
              Εάν δεν έχουμε υγρά απο το ψημένο κρέας, χρησιμοποιούμε στις πατάτες κύβους ζωμού από χοιρινό"
              ingdidient1="Χοιρινό: 23 κιλά"
              ingdidient2="Πατάτες: 25 κιλά"
              ingdidient3="Λάδι: 2 κιλά"
              ingdidient4="Αλάτι"
              ingdidient5="Πιπέρι"
              ingdidient6="Χυμός Λεμόνι: 4-5 φιάλες"             
              ingdidient7="EXTRA: Κάρυ Σκόνι"             
              ingdidient8="EXTRA: Μουστάρδα Σκόνη/Πάστα"             
              ingdidient9="EXTRA: Ντομάτα "             
              />       
      </div>
      
    </div>
  )
}



export default App
