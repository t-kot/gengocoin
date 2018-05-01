export const ActionTypes = {
    ADD_PLACE_VOTES: 'vote/add_place_votes'
};

export const Actions = {
    addPlaceVotes: (volume, value) => ({
        type: ActionTypes.ADD_PLACE_VOTES,
        payload: { volume, value }
    }),
}
