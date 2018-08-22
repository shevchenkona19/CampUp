import {tabTypes} from "../constants/tabs";

const nav = {
    selectedTab: tabTypes.PARTIES
};

const createParty = {
    title: "",
    description: "",
    ideology: "",
    submitSuccess: false,
    isError: false,
    errorCode: "",
};

const setRating = {
    rating: -1,
    selectedParty: {},
    isSuccess: false,
    isError: false,
    showModal: false,
    errorCode: ""
};

const parties = {
    createParty,
    setRating,
    showModal: false,
    parties: [],
    emptyUsers: [],
    partyUsers: [],
};

const createUser = {
    name: "",
    lastName: "",
    status: "",
    isError: false,
    errorCode: "",
    submitSuccess: false
};

const users = {
    showModal: false,
    users: [],
    createUser
};

const createLaw = {
    isError: false,
    errorCode: "",
    title: "",
    body: "",
    creator: "",
    isSuccess: false,
};

const laws = {
    laws: [],
    isSearching: false,
    modalVisible: false,
    createLaw
};

const createNews = {
    isError: false,
    errorCode: "",
    title: "",
    body: "",
    creator: "",
    isSuccess: false,
};

const news = {
    news: [],
    modalVisible: false,
    createNews
};

export const initState = {
    nav,
    news,
    parties,
    laws,
    currentRoute: "",
    isLoading: false,
    users,
    isError: false,
};