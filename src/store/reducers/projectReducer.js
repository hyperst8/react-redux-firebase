const initState = {
    projects: [
        { id: '1', title: 'I need to find a new job', content: 'Blah blah blah' },
        { id: '2', title: 'Find a new girlfriend', content: 'Blah blah blah' },
        { id: '3', title: 'Get marry and have some kids', content: 'Blah blah blah' }
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer