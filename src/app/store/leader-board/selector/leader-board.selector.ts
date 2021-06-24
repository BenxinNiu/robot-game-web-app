import {createSelector} from '@ngrx/store';
import {State} from '../../root.reducer';

export const selectLeaderBoardState = (state: State) => state.leaderBoard;

export const selectIsLoading = createSelector(selectLeaderBoardState, (state) => state.isLoading);

export const selectIsError = createSelector(selectLeaderBoardState, (state) => state.isError);

export const selectLeaderBoard = createSelector(selectLeaderBoardState, (state) => state.leaderBoard);

export const selectPlayerProfile = createSelector(selectLeaderBoardState, (state) => state.playerProfile);
