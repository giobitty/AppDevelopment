import React, { useState } from "react";

// list of the three messages
const messages = [
  "I think, therefore I am",
  "I have a dream",
  "The only thing we have to fear is fear itself",
];

function App() {
  // set the state -ex 1
  const [count, setCount] = useState(0);
  // set the state -ex2
  const [counter, setCounter] = useState(1);
  // set state for -exe 3
  const [isOpen, setIsopen] = useState(false)
  
  // set the state for the form, collect name - exe 4 we start with an empty state, like this we can collect any type of data instead of just one type
  const [inputdata,setInputdata]=useState({})
  // console.log to test the app and see if its reading the change of value!!
  // console.log(name)
  //  function to collect the changes of each input data!!
  const handledata = function(e){
    const name = e.target.name
    const value = e.target.value
    // this is a split we target the name collect multiple data
    setInputdata(values => ({...values, [name]:value}))
  }

  // submit function
  const submitform = function(e){
    e.preventDefault()
    alert(`Your Name is: ${inputdata.fullname} \n Age: ${inputdata.age} \n You identify as: ${inputdata.gender} \n Your suggestions for us are: ${inputdata.usercomments}` )
  }

  return (
    <>
    <h1 className="title">EXE 4:form</h1>
    <section>
      <form className="signupform" onSubmit={submitform}>
        <fieldset>
        <legend>Sign up form</legend>
        <div className="formcontrol">
          <label for="name">Enter name: </label>
          <input id="name" name="fullname" type="text" placeholder="Type your name.." value={inputdata.fullname} onChange={handledata} />
        </div>
        <div className="formcontrol">
          <label for="age">Enter your age: </label>
          <input id="age" type="number" name="age" placeholder="Age: " value={inputdata.age} min={1} max={99} onChange={handledata} />
        </div>
        <div className="formcontrol">
          <label for="selectgender">You identify as: </label>
          <select value={inputdata.gender} id="selectgender" name="gender" onChange={handledata}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="formcontrol">
          <label for="comments">Enter your suggestions: </label>
          <input id="comments" type="text" name="usercomments" placeholder="Max 1000 characters: " maxLength={1000} value={inputdata.usercomments} min={1} onChange={handledata} />
        </div>
        <div className="formcontrol">
          <button type="submit" >Submit</button>
        </div>
        </fieldset>
      </form>
    </section>
      <h1 className="title">Exe 1</h1>
      <p>The count is = {count}</p>
      <button
        className="incrementbtn"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <h1 className="title">Exe 2: slice app</h1>
      <section className="slicecontainer">
        <div className="slicewrapper">
          <div className={counter === 1 ? "active" : ""}>1</div>
          <div className={counter === 2 ? "active" : ""}>2</div>
          <div className={counter === 3 ? "active" : ""}>3</div>
        </div>

        <p className="displaymsg">"{messages[counter - 1]}"</p>
        <div className="groupbtn">
          <button
            className="prev_btn"
            onClick={() => {
              if (counter > 1) setCounter(counter - 1);
            }}
          >
            Previous
          </button>
          <button
            className="next_btn"
            onClick={() => {
              if (counter < 3) setCounter(counter + 1);
            }}
          >
            Next
          </button>
        </div>
      </section>
      <h1 className="title"> EXE 3 : open and close button</h1>
      <section className="intro">
        <b>Cat (Felis catus) </b>, commonly refferd to as the domestic cat or house cat..
        <button className="read" onClick={function(){setIsopen(!isOpen)}}>{isOpen ?"Hide" : "Read More"}
          {/* if the statement is false it will become true with the ! symbol  */}
         </button>
      </section>
      <section>
        {(isOpen &&
        <div className="readmore">
        are small carnivorous mammals that are often kept as pets.
        Adult domestic cats typically weigh between 4 and 5 kg (9 and 11 lb). On average, cats live for about 12 to 15 years, though many can live longer with proper care. They have a strong, flexible body, quick reflexes, sharp retractable claws, and teeth adapted to killing small prey. Cats have excellent night vision and can see at only one-sixth the light level required for human vision. They also have a highly developed sense of smell and hearing.
        BEHAVIOR:
        Cats are known for being territorial animals, often marking their territory with scent glands. They spend a significant amount of time grooming themselves, which keeps their coat clean and reduces the scent from predators. Cats use a variety of vocalizations (meowing, purring, hissing, growling) and body language to communicate with humans and other animals. Even well-fed cats will hunt small animals like birds and rodents.
        </div>
      )}
      </section>
    </>
  );
}

export default App;
