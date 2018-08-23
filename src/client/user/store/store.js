const nav = {
    selectedTab: 1,
};

const users = {
    users: [],
    modalVisible: false,
    selectedUser: {}
};

const parties = {
    parties: [],
    modalVisible: false,
    selectedParty: {},
};

const laws = {
    laws: [],
    modalVisible: false,
    selectedLaw: {},
};

export const initState = {
    nav,
    users,
    parties,
    laws,
    currentRoute: "/",
    isLoading: false,
    isError: false,
};