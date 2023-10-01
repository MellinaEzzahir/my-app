import Plant from './Plant';
import { useState } from "react";

const plants = [
  {
    name: "Echeveria acutifolia", nickname: "none",
    hardy: "unknown",
    Varieties: [
      "none"
    ],
    Cultivars: [
      "none"
    ],
    Hybrids: [
      "none"
    ],
    Forms: [
      "none"
    ],
    Toxicity: [
      { toBirds: "none" },
      { toCats: "none" },
      { toDogs: "none" },
      { toHorses: "none" },
      { toLivestock: "none" },
      { toPeople: "none" }
    ],

    soilType: "Well Drained/Light",
    Sun: "Part shade, full sun",
    Aspect: "any",

    Characteristics: [
      { Height: 15 },
      { Spread: 30 },
      { FlowerColour1: "orange" },
      { FlowerColour2: "yellow" },
      { FoliageColour: "green" }
    ],

  },
  {
    name: "Echeveria agavoides", nickname: "Molded Wax Agave",
    hardy: "unknown",
    Varieties: [
      { varietyName: "agavoides" },
      { varietyName: "corderoyi" },
      { varietyName: "multifida" },
      { varietyName: "prolifera" }
    ],
    Cultivars: [
      { cultivarName: "Aquamarine", detail: "icy, emerald-green leaves" },
      { cultivarName: "Ebony", detail: "lighter-couloured leaves(beige or peach) with dark brown edges almost dark red" },
      { cultivarName: "Lipstick", detail: "neon green leaves and red edges" },
      { cultivarName: "Luming", detail: "reddish, maroon-magenta leaves almost dark purple and pointed leaves" },
      { cultivarName: "Oculus", detail: "covered in a dark red" },
      { cultivarName: "Rose Garnet", detail: "faint neon-green leaves of rather large and sturdy shape, tipped with magenta pink and maturing to red" },
      { cultivarName: "Rubra", detail: "with dark reddish leaves growing in a notably tight, almost 'closed' rosette" },
      { cultivarName: "Salu", detail: "grows in a considerably tighter, closed rosette, with pale green leaves lightly tipped in red. Small 'point' to the ends of the leaves, which mature to red" }
    ],
    Hybrids: [
      { hybridName: "Echeveria agavoides 'Maria'" },
      { hybridName: "Echeveria agavoides 'Romeo'" },
      { hybridName: "Echeveria agavoides 'Scarlet'" },
      { hybridName: "Echeveria agavoides 'Love's Fire'" },
    ],
    Forms: [
      "none"
    ],
    Toxicity: [
      { toBirds: "none" },
      { toCats: "none" },
      { toDogs: "none" },
      { toHorses: "none" },
      { toLivestock: "none" },
      { toPeople: "none" }
    ],
    Soil: [
      { type: "Well Drained/Light/Sandy" }
    ],
    Position: [
      { Sun: "Dappled shade, full sun" },
      { Aspect: "South facing, west facing" }
    ],

    Characteristics: [
      { Height: 12 },
      { Spread: 30 },
      { FlowerColour1: "red" },
      { FlowerColour2: "yellow" },
      { FoliageColour: "green" }
    ]

  },
  {
    name: "Echeveria acutifolia", nickname: "none",
    hardy: "unknown",
    Varieties: [
      "none"
    ],
    Cultivars: [
      "none"
    ],
    Hybrids: [
      "none"
    ],
    Forms: [
      "none"
    ],
    Toxicity: [
      { toBirds: "none" },
      { toCats: "none" },
      { toDogs: "none" },
      { toHorses: "none" },
      { toLivestock: "none" },
      { toPeople: "none" }
    ],
    Soil: [
      { type: "Well Drained/Light" }
    ],
    Position: [
      { Sun: "Part shade, full sun" },
      { Aspect: "any" }
    ],


    Characteristics: [
      { Height: 15 },
      { Spread: 30 },
      { FlowerColour1: "orange" },
      { FlowerColour2: "yellow" },
      { FoliageColour: "green" }
    ],

  }
];

function Plants() {
  const [index, setIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  //this.handleChange = this.handleChange.bind(this);

  const handleChange = e => {
    setChecked(e.target.checked);
  }
  var myList = plants;
  return (
    <div>
      <label class="switch">
        <input type="checkbox" onChange={(e) => handleChange(e)} id="modeSwitch" />
        <span class="slider round"></span>
      </label>

      <p>
        
      </p>
      <div>
        <h2>This is my list of plants</h2>
        {checked &&
          <div>
            /<div>Taille de la liste:{myList.length}</div>
            <div className='plantsBox'>
              {myList.map((x, i) => {
                return <Plant plant={x} />
              })}
            </div >
          </div>
        }
        {!checked &&
          <div className='view2'>
            <div><h2>Another view</h2></div>
            <div className='nextPrevious'>
              <div className='previous'><button onClick={() => previous()}><img src='/images/icons8-back-50.png' alt='previous button' /></button> </div>
              <div><Plant plant={myList[index]} /></div>
              <div className='next'><button onClick={() => next()}><img src='/images/icons8-forward-50.png' alt='next button' /></button> </div>
            </div>
          </div>
        }
      </div>
    </div>);
  function previous() {
    if (index > 0)
      setIndex(index - 1);
  }
  function next() {
    if (index < 2)
      setIndex(index + 1);
  }

}

export default Plants;