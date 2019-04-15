const actions = [
    'USER_REQUEST',
    'USER_SUCCESS',
    'USER_FAILURE'
];

/**
 * @type {{USER_REQUEST:*, USER_SUCCESS:*, USER_FAILURE:*}}
 */
const userTypes = {};
actions.forEach(action => userTypes[action] = action);

export default userTypes;