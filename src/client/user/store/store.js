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

export const initState = {
    nav,
    users,
    parties,
    currentRoute: "/",
    isLoading: false,
    isError: false,
};