export const getIsFetching = state => state.invitation.isFetching
export const getClub = (state) => (state.invitation.club)
export const getClubId = state => state.invitation.club.id
export const getClubGroups = state => state.invitation.club.groups
export const getToken = state => state.invitation.token
export const getUser = state => state.invitation.user
export const getOtherClubUsers = state => []
export const getUsers = (state, ids) =>
  ids.map(id => state.invitation.user.find(user => `${user.userId}` === `${id}`))
export const getDataPolicy = state => state.invitation.dataPolicy
export const getClubData = state => state.club
