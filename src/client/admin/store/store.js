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
    parties: []
};

export const initState = {
    nav,
    parties,
    currentRoute: "",
    isLoading: false,
};