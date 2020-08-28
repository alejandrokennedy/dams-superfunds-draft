var config = {
    // style: 'mapbox://styles/mapbox/streets-v11',
    // style: 'mapbox://styles/mapbox/outdoors-v11',
    // style: 'mapbox://styles/alejandrokennedy/cke4pnwdu13z119pfcyykplyl',
    style: 'mapbox://styles/alejandrokennedy/cke4rma6f1g1m19o6e6cj1j9s',

    accessToken: 'pk.eyJ1IjoiYWxlamFuZHJva2VubmVkeSIsImEiOiJjajhvODY5ZXgwMGdiMnhvM2ZobGE3NjMyIn0.h_vZ7EfPOsetndPjE0tgEQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Toxic Cascades',
    subtitle: 'An Undark Magazine investigation finds aging dams pose a hidden risk to hazardous waste sites around the United States',
    byline: 'By James Dinneen and Alexander Kennedy',
    footer: 'Source: we did some research and learned some things from some people and data and the internet.',
    chapters: [
        {
            id: '1.1',
            title: 'Edenville',
            // image: 'https://compote.slate.com/images/0172fc9d-565e-4412-8487-3827a243b0e0.jpeg?width=780&height=520&rect=1024x683&offset=0x0',
            description: 'On May 19, a group of engineers and emergency officials gathered in Midland County, Michigan beside the swollen Tittabawasee River to decide what to do about the Edenville Dam. Over the past two days, heavy rains had filled the river, overwhelming the dam’s spillway and running over top of its earthen dike, which was built in 19XX. “We were gonna sit down and talk about what next,” recalled Roger Dufresne, volunteer fire chief of Edenville Township for the past 21 years. “And that’s when the dam broke.”',
            location: {
                center: [-84.376012, 43.813487],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1.2',
            title: 'Eden to Sanford',
            // image: 'https://compote.slate.com/images/0172fc9d-565e-4412-8487-3827a243b0e0.jpeg?width=780&height=520&rect=1024x683&offset=0x0',
            description: '“Everybody scattered,” said Dufresne, rushing to communities within the dam’s inundation zone to clear people away from the river as the water flowing from the breach became a torrent, snapping trees and telephone poles in its path.',
            location: {
                center: [-84.395427, 43.751611],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'midland-flood-area',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'midland-flood-area',
                    opacity: 0
                }
            ]
        },
        {
            id: '1.3',
            title: 'Sanford',
            // image: 'https://compote.slate.com/images/0172fc9d-565e-4412-8487-3827a243b0e0.jpeg?width=780&height=520&rect=1024x683&offset=0x0',
            description: 'Seven miles and one hour fifteen minutes later, the floodwater reached Sanford Dam, another hydroelectric dam built in YEAR. As debris clogged the dam’s spillway, the water overtopped the embankment threatening a second breach and even more catastrophic flooding.',
            location: {
                center: [-84.380461, 43.677271],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1.4',
            title: 'Sanford Destroyed',
            // image: 'https://compote.slate.com/images/0172fc9d-565e-4412-8487-3827a243b0e0.jpeg?width=780&height=520&rect=1024x683&offset=0x0',
            description: 'In the surrounding town of Sanford, the surging water tore down bridges, and destroyed houses and buildings along the river. “It’s hard to watch your hometown get wiped out,” Jerry Cole, a lifelong Sanford resident and volunteer fire chief, told Undark.',
            location: {
                center: [-84.380461, 43.677271],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1.5',
            title: 'Sanford to Midland',
            // image: 'https://compote.slate.com/images/0172fc9d-565e-4412-8487-3827a243b0e0.jpeg?width=780&height=520&rect=1024x683&offset=0x0',
            description: 'As the floodwater—two feet higher than the highest flood on record—swept down the Tittabawasee into the larger town of Midland TK miles downstream of Sanford, Al Taylor was watching on the news, worried.',
            location: {
                center: [-84.321353, 43.641270],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1.6',
            title: 'Midland',
            // image: 'https://compote.slate.com/images/0172fc9d-565e-4412-8487-3827a243b0e0.jpeg?width=780&height=520&rect=1024x683&offset=0x0',
            description: 'As chief of the hazardous waste section at Michigan’s Department of Environmental Quality (EGLE), Taylor knew from Midland on, sediments in the river were contaminated with dioxins, toxic substances released in past decades from the large Dow Chemical plant on the river south of town.',
            location: {
                center: [-84.246159, 43.613507],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: "If you're not careful...",
            image: 'https://i.gifer.com/fxyz.gif',
            description: 'It could happen to you!',
            location: {
                center: [-98.5795, 39.8283],
                zoom: 4,
                pitch: 10,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'tippytopdams',
                    opacity: 1
                },
                {
                    layer: 'tippytopsfrcra',
                    opacity: 1
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
