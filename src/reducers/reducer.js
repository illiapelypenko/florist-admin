function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_TYPES':
      return { ...state, types: action.payload };
    case 'SET_CONTACTS':
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}
