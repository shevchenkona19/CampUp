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

const parties = {
    createParty,
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

export const initState = {
    nav,
    parties,
    currentRoute: "",
    isLoading: false,
    users,
    isError: false,
};