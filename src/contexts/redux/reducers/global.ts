import { AppActionTypes, AppTypes } from "../actionTypes/app";

import { GlobalState } from "../models/globalState";

const initialState: GlobalState = {
  id: 0,
  amount: 0
};

function addNewfriend(friendList: any, newFriendId: any) {
  const newFriendList = friendList;
  newFriendList.userIds.push(newFriendId);
  return newFriendList
}

const reducer = (state: GlobalState = initialState, action: AppActionTypes) => {
  switch (action.type) {
    case AppTypes.GLOBAL:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}

export default reducer