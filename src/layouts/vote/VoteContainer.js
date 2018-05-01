import Vote from './Vote'
import { drizzleConnect } from 'drizzle-react';
import { Actions } from '../../vote/action';

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        Betting: state.contracts.Betting,
        drizzleStatus: state.drizzleStatus,
        contracts: state.contracts,
    }
};

const mapDispatchToProps = (dispatch, ownProps, extra) => {
    return {
        addPlaceVotes(volume, values, context) {
            dispatch(Actions.addPlaceVotes(volume, values));
        }
    }
};

const VoteContainer = drizzleConnect(Vote, mapStateToProps, mapDispatchToProps);

export default VoteContainer
