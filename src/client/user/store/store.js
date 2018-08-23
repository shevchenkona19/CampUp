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

const news = {
    news: [],
    modalVisible: false,
    selectedNews: {},
};

export const initState = {
    nav,
    users,
    parties,
    laws,
    news,
    currentRoute: "/",
    isLoading: false,
    isError: false,
};