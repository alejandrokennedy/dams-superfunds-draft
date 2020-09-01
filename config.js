// const result = gimme()
// console.log('result', result)

// async function getChapters() {
//   const url = `https://cors-anywhere.herokuapp.com/https://docs.google.com/spreadsheets/d/e/2PACX-1vRqqdat_aFRZRPYE-cJB3XnvW2_mh9DO6cJ7cWCfSYmNa1eLroK2cldQQL6VeCnOPCUQs8DolcfnWEE/pub?gid=0&single=true&output=csv`
//   const csv =  await d3.csv(url)

//   // console.log(csv)
//   // return csv
// }

var config = {
    // style: 'mapbox://styles/alejandrokennedy/cke4pnwdu13z119pfcyykplyl',
    // style: 'mapbox://styles/alejandrokennedy/cke4rma6f1g1m19o6e6cj1j9s',
    style: 'mapbox://styles/alejandrokennedy/ckehs5s5h1dw319p8yig56e7j',

    accessToken: 'pk.eyJ1IjoiYWxlamFuZHJva2VubmVkeSIsImEiOiJjajhvODY5ZXgwMGdiMnhvM2ZobGE3NjMyIn0.h_vZ7EfPOsetndPjE0tgEQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Toxic Cascades',
    subtitle: 'An Undark Magazine investigation finds aging dams pose a hidden risk to hazardous waste sites around the United States',
    byline: 'By James Dinneen and Alexander Kennedy',
    footer: 'By James Dinneen and Alexander Kennedy',
    chapters: [
      {
        id: "0",
        title: "",
        image: "",
        description: "On May 19, a group of engineers and emergency officials gathered in Midland County, Michigan beside the swollen Tittabawasee River to decide what to do about the Edenville Dam. Over the past two days, heavy rains had filled the river, overwhelming the dam’s spillway and running over top of its earthen dike, which was built in 1924. ",
        location: {
          center: [
            -84.386012,
            43.813487
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "1",
        title: "",
        image: "",
        description: "“We were gonna sit down and talk about what next,” recalled Roger Dufresne, volunteer fire chief of Edenville Township for the past 21 years. “And that’s when the dam broke.”",
        location: {
          center: [
            -84.386012,
            43.813487
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "2",
        title: "",
        image: "",
        description: "“Everybody scattered,” said Dufresne, rushing to communities within the dam’s inundation zone to clear people away from the river as the water flowing from the breach became a torrent, snapping trees and telephone poles in its path.",
        location: {
          center: [
            -84.395427,
            43.751611
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "3",
        title: "",
        image: "",
        description: "Seven miles and one hour fifteen minutes later, the floodwater reached Sanford Dam, another privately owned hydroelectric dam built in 1925, where it overtopped the embankment threatening a second breach and even more catastrophic flooding. ",
        location: {
          center: [
            -84.380461,
            43.677271
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "4",
        title: "",
        image: "",
        description: "In the surrounding town of Sanford, the surging water tore down bridges, and destroyed houses and buildings along the river. “It’s hard to watch your hometown get wiped out,” Jerry Cole, a lifelong Sanford resident and volunteer fire chief, told Undark. ",
        location: {
          center: [
            -84.380461,
            43.677271
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "5",
        title: "",
        image: "",
        description: "As the floodwater—two feet higher than the highest flood on record—swept down the Tittabawasee into the larger town of Midland ten miles downstream of Sanford, Al Taylor was watching on the news, worried.",
        location: {
          center: [
            -84.321353,
            43.64127
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "6",
        title: "",
        image: "",
        description: "As chief of the hazardous waste section at Michigan’s Department of Environmental Quality (EGLE), Taylor knew that from Midland on sediments in the river were contaminated with dioxins, toxic substances released in past decades from the large Dow Chemical plant on the river south of town.",
        location: {
          center: [
            -84.246159,
            43.613507
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "7",
        title: "",
        image: "",
        description: "Over the years, the moving water had deposited contaminated sediment in the Tittabawasee floodplain from Midland all the way to Lake Huron.",
        location: {
          center: [
            -84.219159,
            43.603508
          ],
          zoom: 13,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "dow-plant",
            opacity: 0.4
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: [
          {
            layer: "dow-plant",
            opacity: 0
          }
        ]
      },
      {
        id: "8",
        title: "",
        image: "",
        description: "Since 2012, Dow Chemical, after signing a consent decree with EGLE and EPA, had worked to clean up the river, mapping the contaminated areas, and capping and removing dioxin-laden sediment where possible. The engineers who designed the cleanup knew the Tittabawasee floods naturally most years, and had taken flood hazards into account in their cleanup design, Taylor told Undark, but nobody had prepared for the level of flooding caused by a dam failure.",
        location: {
          center: [
            -84.009314,
            43.519811
          ],
          zoom: 13,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "9",
        title: "",
        image: "",
        description: "Now, as Taylor watched the floodwater breach one of the Dow plant’s containment ponds and roil down the river, he was concerned contaminated sediment would go with it, swirled up from the bottom and scoured from the banks—a toxic cascade.",
        location: {
          center: [
            -84.009314,
            43.519811
          ],
          zoom: 13,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "10",
        title: "",
        image: "https://nationalpostcom.files.wordpress.com/2020/05/dam-3.png?quality=100&strip=all&w=497",
        description: "Flooding at Dow [PHOTO]",
        location: {
          center: [
            -84.009314,
            43.519811
          ],
          zoom: 13,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "tippytopdams",
            opacity: 0
          },
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          }
        ],
        onChapterExit: []
      },
      {
        id: "11",
        title: "",
        image: "",
        description: "An investigation by Undark finds that numerous other hazardous waste sites around the United States are also at risk of flooding due to a dam failure.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "tippytopdams",
            opacity: 1
          },
          {
            layer: "notable-dams",
            opacity: 0
          },
          {
            layer: "notable-dams-labels",
            opacity: 0
          },
          {
            layer: "midland-flood-area",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "12",
        title: "",
        image: "",
        description: "Based on records from the EPA, and state and federal dam regulators, Undark identified more than [TK120] dams in [TK46] states which, if they were to fail, would likely flood a hazardous waste site, potentially spreading toxic material into surrounding communities. *[click for a list of all dams and hazardous waste sites identified by Undark.]",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "13",
        title: "",
        image: "",
        description: "According to dam safety experts, the [TK120] dams Undark identified are likely just a fraction of the total number of dams which pose a risk to hazardous waste sites. Because no agency tracks this hazard, the total number is unknown.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "14",
        title: "",
        image: "",
        description: "To focus on the most hazardous waste sites at risk of flooding, Undark looked only at current and former Superfund sites and RCRA sites, which represent the highest priority environmental cleanups managed by the EPA and state environmental agencies. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "15",
        title: "",
        image: "",
        description: "To identify the riskiest dams, Undark looked only at “high hazard” dams , which means loss of human life would be likely to occur if the dam were to fail, and at dams older than 50 years, the age after which many dams require renovations to remain safe.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "16",
        title: "",
        image: "",
        description: "While the majority of dams Undark identified were rated as being in fair or satisfactory condition during their most recent inspection, a number of dams were in poor or unsafe condition at their most recent inspection.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "17",
        title: "",
        image: "",
        description: "For a number of dams, Undark was unable to confirm suspected flood risks to hazardous waste sites because the responsible agencies did not have inundation maps prepared for those dams. For several dams, agencies could not confirm flood risks due to security concerns. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "18",
        title: "",
        image: "",
        description: "Based on correspondence with dam safety, environmental, and emergency officials, Undark also found that the risks aging dams pose to hazardous waste sites are largely unrecognized by any agency.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "19",
        title: "",
        image: "",
        description: "The effect is that, as in Michigan, hazardous waste sites and surrounding communities are left vulnerable to the low probability, but high consequence event of a toxic cascade.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "20",
        title: "",
        image: "",
        description: "The relationship between dams and hazardous waste sites is just one dimension of the broader hazards dams pose to people and critical infrastructure in the United States, even as they serve critical functions like power generation, water storage, recreation, and flood control.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "21",
        title: "",
        image: "",
        description: "There are more than 90,000 dam etc.There are more than 90,000 dams in the United States tracked by the US Army Corps of Engineers.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "22",
        title: "",
        image: "",
        description: "Of those, more than 15,000 are considered “high hazard,” posing a risk to human life and property downstream. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "23",
        title: "",
        image: "",
        description: "The American Society of Civil Engineers (ASCE) estimates more than 2,300 of those dams are in poor or unsatisfactory condition, and with an average age of [TKT56] years, the majority of them are past their prime. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "24",
        title: "",
        image: "",
        description: "In its 2017 Infrastructure Report Card, ASCE gave American dams a “D” grade, and estimated the fixes necessary to rehabilitate all the nation’s dams would cost $64 billion; rehabilitating only the high hazard dams would cost $22 billion.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "25",
        title: "",
        image: "",
        description: "For 2020, Congress appropriated $10 million to be split among the states for FEMA’s high hazard dam rehabilitation program. “That’s kind of a drop in the bucket for what’s really needed,” said Marc Ogden, co-author of ASCE’s Infrastructure Report Card section on dams.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "26",
        title: "",
        image: "",
        description: "Meanwhile, dam safety programs report a chronic lack of funds for dam safety projects, both from public sources and from private dam owners unable or unwilling to pay for expensive repairs.  ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "27",
        title: "",
        image: "",
        description: "In Michigan, both dams that failed were privately owned by a company called Boyce Hydro, which had not repaired the dams despite years of warning from state officials that there were problems.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "28",
        title: "",
        image: "",
        description: "More than half of all dams in the US are privately owned, according to the ASCE.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "29",
        title: "",
        image: "",
        description: "Without the funding to match the problem, members of the dam safety community have looked to non-typical sources of funding, says Bill McCormick, chief of the Colorado dam safety program. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "30",
        title: "",
        image: "",
        description: "In Eastern Oregon for example, the 90-year old Wallowa Lake Dam—which Undark found would flood the Joseph Forest Products Superfund site if it were to fail—was slated this year for a  $16 million renovation to repair its deteriorating spillway and tunnels, but the plans have stalled since COVID-19 tanked Oregon’s lottery revenue which was funding most of the project.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "31",
        title: "",
        image: "",
        description: "The challenges facing America’s dams are also exacerbated by climate change, say dam safety experts, with more frequent extreme weather events and more intense flooding expected in parts of the country adding new stresses to old designs. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "32",
        title: "",
        image: "",
        description: "“If we start getting much bigger storms, then that itself will lead to a higher probability of overtopping and dam failure,” said Upmanu Lall, Director of the Columbia University Water Center and co-author of a recent report assessing the economic impacts of a climate-induced dam failure. The report outlines how in addition to more extreme weather, factors like changes in land use, sediment buildup, and changing frequencies of wet-dry and freeze-thaw cycles all can contribute to a higher probability of dam failure.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "33",
        title: "",
        image: "",
        description: "“There are many situations across the country with these dams where they don't meet the current safety standards […]” said Ogden. “And the fact that there could be these hazardous sites as part of that, just increases that concern—what the consequences of a failure might be.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "tippytopdams",
            opacity: 1
          },
          {
            layer: "notable-dams",
            opacity: 0
          },
          {
            layer: "notable-dams-labels",
            opacity: 0
          },
          {
            layer: "midland-flood-area",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "34",
        title: "",
        image: "",
        description: "Fortunately, nobody died in the flooding in Michigan, but more than 10,000 people had to be evacuated from their homes and the disaster caused an estimated $200 million in damage—$26 million in the small town of Sanford alone. Repairing the Edenville Dam before it failed would have cost around $1.6 million. ",
        location: {
          center: [
            -84.246159,
            43.613507
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          },
          {
            layer: "dow-plant",
            opacity: 0.4
          },
          {
            layer: "tippytopdams",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "35",
        title: "",
        image: "",
        description: "“I never imagined this would ever happen in my time,” Dufresne, the fire chief from Edenville, told Undark.",
        location: {
          center: [
            -84.246159,
            43.613507
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          },
          {
            layer: "dow-plant",
            opacity: 0.4
          },
          {
            layer: "tippytopdams",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "36",
        title: "",
        image: "",
        description: "When the waters receded from Midland a few days after the break, Dow and EGLE inspectors reported there had not been any toxic release from the plant’s containment pond, and, while there had been some damage to the Superfund cleanup, preliminary sediment samples taken by EGLE did not find levels of dioxins that required changing the cleanup plan. ",
        location: {
          center: [
            -84.246159,
            43.613507
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          },
          {
            layer: "dow-plant",
            opacity: 0.4
          },
          {
            layer: "tippytopdams",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "37",
        title: "",
        image: "",
        description: "The designs put in place to protect contaminated sediment from the flood-prone Tittabawasee seemed to have done their job.",
        location: {
          center: [
            -84.246159,
            43.613507
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          },
          {
            layer: "dow-plant",
            opacity: 0.4
          },
          {
            layer: "tippytopdams",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "38",
        title: "",
        image: "",
        description: "But the apparent resilience of the site to the catastrophic flooding is not a reason to discount the risks dams pose to hazardous waste sites and to the communities that surround them, says Taylor, the EGLE official. “Clearly […] as a lesson learned from this, we need to be aware of that possibility.”",
        location: {
          center: [
            -84.246159,
            43.613507
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0.7
          },
          {
            layer: "notable-dams-labels",
            opacity: 1
          },
          {
            layer: "midland-flood-area",
            opacity: 0.4
          },
          {
            layer: "dow-plant",
            opacity: 0.4
          },
          {
            layer: "tippytopdams",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "39",
        title: "",
        image: "",
        description: "Emporia Foundry Incorporated in Greenville County, Virginia is a RCRA-regulated hazardous waste site which, according to maps provided to Undark by Virginia’s Dam Safety Program, could flood if the nearby Emporia Dam, a hydroelectric dam built in 1908, were to fail.",
        location: {
          center: [
            -77.5331,
            36.6966
          ],
          zoom: 15,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [
          {
            layer: "notable-dams",
            opacity: 0
          },
          {
            layer: "notable-dams-labels",
            opacity: 0
          },
          {
            layer: "midland-flood-area",
            opacity: 0
          },
          {
            layer: "dow-plant",
            opacity: 0
          },
          {
            layer: "tippytopdams",
            opacity: 0
          }
        ],
        onChapterExit: []
      },
      {
        id: "40",
        title: "",
        image: "",
        description: "Previously a foundry which manufactured manhole covers and other steel products, the Emporia site includes a capped landfill containing lead, and soil contaminated with other toxins like arsenic and cadmium. More than 3,000 people live within a mile of the site, 75% of whom are African-American, according to EPA data.",
        location: {
          center: [
            -77.57211,
            36.69512
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "41",
        title: "",
        image: "",
        description: "Per Virginia’s regulations, the cleanup design for the site considered the hazards posed by the 100-year floodplain, but, according to a spokesperson from the Virginia Department of Environmental Quality (DEQ), did not take into account flooding due to a dam failure, which would extend far beyond the 100-year floodplain and inundate the entire foundry site and much of the city of Emporia. The spokesperson referred Undark to Virginia’s Dam Safety Program for questions about dam hazards.",
        location: {
          center: [
            -77.57211,
            36.69512
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "42",
        title: "",
        image: "",
        description: "When asked about risks posed to hazardous waste sites by Emporia Dam, Wendy C. Howard Cooper, director of the Dam Safety Program, explained the program does not track hazardous waste below dams. Rather, its role is to define the area a dam failure would flood and to inform local emergency managers of the hazards to human life and property, not to identify the purpose of every property at risk of flooding.",
        location: {
          center: [
            -77.57211,
            36.69512
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "43",
        title: "",
        image: "",
        description: "“That would be a rabbit hole that no one could regulate…,” she said. “If there is an emergency…those local units of government who manage and regulate and license those facilities know what those purposes are, and have the proper emergency procedures in place to implement.”",
        location: {
          center: [
            -77.63661,
            36.70805
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "44",
        title: "",
        image: "",
        description: "When contacted by Undark however, J. Reggie Owens, program coordinator for Greenville County Emergency Services, though aware of both the Emporia Dam and the foundry site, was not aware that the site could be flooded if the dam were to fail, commenting “it’s not even in the floodplain.” “It’s never been put on my radar by DEQ or anyone else,” he said.",
        location: {
          center: [
            -77.63661,
            36.70805
          ],
          zoom: 10,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "45",
        title: "",
        image: "",
        description: "Undark found a similar situation in other states, where dam safety programs’ mandate to assess immediate dam hazards to human life and property, per FEMA guidelines, meant the possible cascading environmental impacts of flooding a hazardous waste site went unacknowledged. And while environmental agencies have protocols for assessing flooding hazards, they do not reference flooding caused by dam failure, which is not identified on FEMA’s Flood Insurance Rate Maps and can be easy to overlook.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "46",
        title: "",
        image: "",
        description: "In Rhode Island for instance, where Undark identified [TK7] dams which would likely flood one or more hazardous waste sites if they were to fail, neither the dam safety office or the office responsible for hazardous waste had considered this hazard, though they work out of the same building.",
        location: {
          center: [
            -71.4774,
            41.5801
          ],
          zoom: 9,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "47",
        title: "",
        image: "",
        description: "One of these scenarios is in the town of North Smithfield, where in the late 1960s and 1970s, a textile manufacturer called Stamina Mills spilled a toxic chemical solvent called trichloroethylene (TCE) into the soil. The mill also used a burned-out building on the site as a landfill, thought to contain contaminants including TCE, polycyclic aromatic hydrocarbons, sulfuric acid, soda ash, wool oil, plasticizers, and pesticides. The EPA put the site on the Superfund list in 1983 when a plume of TCE was detected in the groundwater around the site. ",
        location: {
          center: [
            -71.5673,
            41.99599
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "48",
        title: "",
        image: "",
        description: "Parts of the Stamina Mills Superfund site are within the inundation zone of several dams, including three century-old dams containing Slatersville Reservoir and the 140-year-old Forestdale Pond Dam, which was considered “unsafe” during its most recent inspection. The Rhode Island dam safety program is working to locate the dam’s owner in order to rehabilitate the dam.",
        location: {
          center: [
            -71.5673,
            41.99599
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "49",
        title: "",
        image: "",
        description: "Hazard assessments of the Slatersville Reservoir dams produced by the Rhode Island dam safety program and reviewed by Undark, made no reference to the Stamina Mills site. An inspection report of Forestdale Pond Dam mentioned the Superfund site, but only to say work on the cleanup was the reason grass was not overgrown on the dam’s northern embankment.",
        location: {
          center: [
            -71.5673,
            41.99599
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "50",
        title: "",
        image: "",
        description: "While the cleanup at the site was completed in 2000, according to EPA documents, the remedy did not take flooding due to a dam failure into account.",
        location: {
          center: [
            -71.5673,
            41.99599
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "51",
        title: "",
        image: "",
        description: "Though the cleanup included the removal of contaminated soil and installation of riprap to prevent erosion within the 100-year floodplain, a failure of any of the four dams identified by Undark would cause flooding beyond the 100-year floodplain. A failure of any of the Slatersville Reservoir dams would cause a “domino effect” of dam failures downstream and cause flooding well beyond the 500-year floodplain, according to Rhode Island dam safety reports.",
        location: {
          center: [
            -71.5673,
            41.99599
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "52",
        title: "",
        image: "",
        description: "When asked to comment on any flood hazards posed by dams to the Stamina Mills site, EPA responded that the only remaining remedy on the site, the groundwater treatment system, would not be effected if Forestdale Pond Dam, which is immediately adjacent to the site, were to fail. EPA made no reference to the three other, larger dams less than a mile upstream or how flooding due to their failure would impact portions of the site outside the 100-year floodplain.",
        location: {
          center: [
            -71.5673,
            41.99599
          ],
          zoom: 13.5,
          pitch: 60,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "53",
        title: "",
        image: "",
        description: "Though impacts would vary widely depending on the nature of the flooding and the particulars of the hazardous waste site, a sudden, intense flood caused by a dam failure could spread contaminants from hazardous waste sites into surrounding communities, say environmental engineers and toxicologists Undark spoke with.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "54",
        title: "",
        image: "",
        description: "Even sites designed to withstand flooding might be impacted if debris carried in floodwater scoured and eroded caps, releasing toxic material into the water, explained Rick Rediske, a toxicologist at Grand Valley State University in Michigan. That is what happened in Houston in 2017, when flooding from Hurricane Harvey eroded a soil cap at the San Jacinto River Waste Pits Superfund site, exposing dioxins and other carcinogenic substances.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "55",
        title: "",
        image: "",
        description: "Once released, water could move the contaminants around the site and redeposit them anywhere in the floodplain, exposing people and ecosystems to health hazards, said Jacob Carter a research scientist at the Union of Concerned Scientists, who formerly studied flooding hazards to contaminated sites for the EPA. Carter also pointed out that communities most vulnerable to these hazards are likely to be low income and communities of color.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "56",
        title: "",
        image: "",
        description: "The best case scenario, according to Allen Burton, Director of the Institute for Global Change at University of Michigan, is that any toxic material released would be diluted by the flood and new clean sediment. But he wouldn’t count on it.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "57",
        title: "",
        image: "",
        description: "“When you have a break like this, that’s so massive, it just moves the sediment everywhere downstream,” said Burton, referencing the Michigan flood. “You have no way of predicting, really, how much of the bad stuff moved, how far it moved, how far it got out into the floodplain, what the concentrations are.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "58",
        title: "",
        image: "",
        description: "Burton also pointed out that regulated hazardous waste sites are just part of potential contamination in a dam breach scenario. For one, sediment behind dams is itself often contaminated after years of collecting whatever went into the river upstream, whether runoff from farms or tailings from mines. Contamination could also come from more mundane sources in the floodplain, like wastewater treatment plants or the old paint cans rusting in people’s basements.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "59",
        title: "",
        image: "",
        description: "“The fish downstream don't care if contaminants came from your garage or Dow Chemical,” said Burton.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "60",
        title: "",
        image: "",
        description: "By building engineered structures or taking other resiliency measures, the most hazardous waste sites can be designed to withstand flooding, explained Carter, who recently published a report for the Union of Concerned Scientists on coastal flooding hazards to Superfund sites.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "61",
        title: "",
        image: "",
        description: "But in order to prepare for floods, Carter says, flooding hazards have to be recognized first, whether they come from from rising seas, increasing storm surge, or aging dams.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "62",
        title: "",
        image: "",
        description: "“They could have looked at that dam and said, ‘Oh, it gets a D minus for infrastructure. This thing could break,’” said Burton, referring to the Edenville Dam. “So in the future, it would be smart of EPA to require the principal party who's responsible for the cleanup to look at the situation to see if it actually could happen.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "63",
        title: "",
        image: "",
        description: "A key piece in recognizing hazards posed by dams to communities and critical infrastructure are Emergency Action Plans (EAPs), which detail areas to be evacuated and emergency protocols in the event of a failure. Emergency officials in Midland County, Michigan credited the Emergency Action Plan for the Edenville Dam for there being no deaths during the flood.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "64",
        title: "",
        image: "",
        description: "Most EAP’s contain inundation maps, which model the area that would by flooded in a hypothetical dam break.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "65",
        title: "",
        image: "",
        description: "Advances in computer modelling and dam safety initiatives have increased the number of dams with EAP’s, said Ogden, but according to the ASCE, about 20% of high hazard dams still lack EAP’s, and most EAP’s are not immediately accessible to the public due to security concerns.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "66",
        title: "",
        image: "",
        description: "During this investigation, Undark was unable to confirm suspected flood risk for [TK38] dams identified due to their proximity to a hazardous waste site because dam safety programs lacked Emergency Action Plans or inundation maps for those dams, or would not make those documents available due to security concerns.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "67",
        title: "",
        image: "",
        description: "According to Ogden, dam safety regulators and owners could do a better job identifying hazards downstream and informing emergency officials and communities of the risks, but he pointed out informing what might be tens of thousands of people in a dam’s inundation can be difficult.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "68",
        title: "",
        image: "",
        description: "“We've got to find ways to educate the public about about this low probability, but high consequence risk,” agreed McCormick, chief of Colorado dam safety. Undark identified [TK7] dams in Colorado that would likely flood a hazardous waste site if they were to fail.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "69",
        title: "",
        image: "",
        description: "One step that could make a big difference is for dam inundation zones to be included on FEMA’s Flood Insurance Rate Map, said Ogden. That would ensure communities, emergency officials, and managers of hazardous waste sites and other critical infrastructure are aware of and have access to the information they need to respond to dam hazards, says [TK FEMA Dam Safety Official James Demby.]",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "70",
        title: "",
        image: "",
        description: "Some states, including Rhode Island, have made inundation zones, EAP’s, and inspection reports for the dams they regulate publicly available online. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "71",
        title: "",
        image: "",
        description: "In South Carolina, following a 2015 event when heavy rains caused 49 state-regulated dams and one federally-regulated dam to fail, dam inundations for the most hazardous state-regulated dams were made publicly available. Though the South Carolina Department of Environmental Health and Control does not track risks dams pose to hazardous waste sites, Undark was able to identify three dams which would flood a hazardous waste site in the state using this resource.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "72",
        title: "",
        image: "",
        description: "In California, many inundation areas were made available following a 2017 dam failure scare at the Oroville Dam, the tallest dam in the country. Using this resource, Undark identified three Superfund sites within the inundation zone of Oroville Dam, none of which had taken considered flooding due to dam failure during they remediation, according to the EPA. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "73",
        title: "",
        image: "",
        description: "However, due to the “extraordinary volume of water” that would flood the site if the dam were to fail, commented EPA, “it is not feasible to alter the existing landfills and groundwater remedy infrastructure to protect against the potential failure of the Oroville Dam.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "74",
        title: "",
        image: "",
        description: "It’s better if the dam just doesn’t break.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "75",
        title: "",
        image: "",
        description: "“The problem is we haven't taken good care of them and we don't pay attention,” said Farshid Vahedifard, a civil engineer at Mississippi State University who co-authored a recent letter on the pro and cons of dam removal. “It's like buying a car. You know, when you buy a brand new car, after a few years, you have to take care of it.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "76",
        title: "",
        image: "",
        description: "After spreading awareness about dam hazards, said Vahedifard, “the second thing is definitely we need to invest more.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "77",
        title: "",
        image: "",
        description: "In August, a few months after the flood, life in Midland County was slowly getting back to normal. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "78",
        title: "",
        image: "",
        description: "“Some of the people are trying to put their houses back together. The businesses are just trying to figure out what to do next,” Jerry Cole, the fire chief in Jerome Township, told Undark, though the COVID-19 pandemic followed by the flood has made things tough.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "79",
        title: "",
        image: "",
        description: "His advice for other communities that might be dealing with a problematic dam: “Take it serious.”",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "80",
        title: "",
        image: "",
        description: "The company that owns the dams, Boyce Hydro, declared bankruptcy and faces numerous lawsuits related to the flooding. An independent investigation commissioned by the Federal Energy Regulatory Commission is looking into the dam failures. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "81",
        title: "",
        image: "",
        description: "The Four Lakes Task Force, a community organization which had been in the process of buying the dams from Boyce Hydro when they failed, estimated restoring the reservoirs and rebuilding the dams would cost upwards of $300 million.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "82",
        title: "",
        image: "",
        description: "“It just amazes me that this actually happened here,” said Roger Dufresne, the fire chief in Edenville. ",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "83",
        title: "",
        image: "",
        description: "Up the road from the fire station, neat houses looked out over a wide basin of sand-streaked mud once made a lake by the Edenville Dam. Down at the end of the basin where the river was still flowing through the gap it had punched in the dam, a group of teenagers lounged on inner-tubes, splashing around.",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      },
      {
        id: "84",
        title: "",
        image: "",
        description: "*NOTES: - Following a Government Accountability Office study on flood risks to Superfund sites, Undark considered hazardous waste sites to be within a dam’s inundation zone if the inundation passed within 0.2 miles of the hazardous waste site’s geographic coordinate listed by the EPA….Undark’s initial search only considered dams within 10 km of hazardous waste sites. Many dams have inundation zones that extend far more than 10 km downstream…Hazardous waste sites have widely varying levels and types of hazardous waste, with widely different vulnerability to flooding. RCRA and NPL sites only capture some of the most hazardous regulated hazardous waste, and don’t include the many thousands of Brownfields sites or sites managed by state environmental agencies…List of Dams and Hazardous Waste Sites at Risk by State: Dam Name/Hazardous Site Name/Dam Regulator/State TK",
        location: {
          center: [
            -98.5795,
            39.8283
          ],
          zoom: 4,
          pitch: 10,
          bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
      }
    ]
}
