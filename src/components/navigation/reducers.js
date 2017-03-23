
export default function reducers(state = [], action) {
    switch (action.type) {
        case "DefaultMenu":
            return action.payload;
        default:
            return state;
    }
}
