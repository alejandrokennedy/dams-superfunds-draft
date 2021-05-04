var config = {
    style: 'mapbox://styles/alejandrokennedy/ckehs5s5h1dw319p8yig56e7j',
    accessToken: 'pk.eyJ1IjoiYWxlamFuZHJva2VubmVkeSIsImEiOiJjajhvODY5ZXgwMGdiMnhvM2ZobGE3NjMyIn0.h_vZ7EfPOsetndPjE0tgEQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    // title: 'Toxic Cascades',
    // subtitle: 'An Undark Magazine investigation finds aging dams pose a hidden risk to hazardous waste sites around the United States',
    // byline: 'By James Dinneen and Alexander Kennedy',
    footer: 'Data Sources: Dams: National Inventory of Dams; Hazardous waste sites: EPA Envirofacts; Inundation Zones: Rhode Island Department of Environmental Management, California Department of Water Resources, Virginia Department of Conservation and Recreation; Midland Flooding: City of Midland<br><br><em>James Dinneen is a science and environmental journalist from Colorado, based in New York.<br><br>Alexander Kennedy is a front-end software engineer specializing in data visualization.</em>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
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
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
