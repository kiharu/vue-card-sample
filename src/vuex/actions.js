export const getAllUsers = makeAction('RECEIVE_USERS')
export const deleteUser = makeAction('DELETE_USER')
export const addUser = makeAction('ADD_USER')
export const updateName = makeAction('UPDATE_NAME')
export const updateTwitter = makeAction('UPDATE_TWITTER')
export const updateIntro = makeAction('UPDATE_INTRO')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
