import { createSlice } from "@reduxjs/toolkit";
import classNames from "classnames";
import {
    ArticleIcon,
    CollapsIcon,
    HomeIcon,
    LogoIcon,
    LogoutIcon,
    UsersIcon,
    VideosIcon,
} from "../components/icons";
import { useRouter } from "next/router";

export const userSlice = createSlice({
    name: "status",
    initialState: {
        value: [
            { id: 1, label: "Main Categories", icon: HomeIcon, link: "/" },
            { id: 2, label: "Level 1", icon: ArticleIcon, link: "" },
            { id: 3, label: "Level 2", icon: UsersIcon, link: "" },
            { id: 4, label: "Models", icon: VideosIcon, link: "" }
        ]
    },
    reducers: {
        getState: (state, action) => {
            state.value = action.payload
        },
        Subcategory: (state, action) => {

            // console.log(action.payload)

            state.value.map(item => item.id === 2 ? item.link = `/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
            console.log("first")

            // state.value[1].link=`/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`
            // if (useRouter().pathname == "/[subcategory]") {
            //     if (typeof window !== "undefined") {
            //         for (let i = 0; i < state.value.length; i++) {
            //             if (state.value[i].label == "Subcategory") {
            //                 state.value[i].link == ""
            //                 state.value[i].link = `/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`
            //             }
            //         }
            //     }
            // }
        },
        Subsubcategory: (state, action) => {

            state.value.map(item => item.id === 3 ? item.link = `/subsubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
            console.log("second")


            // state.value[2].link=`/subsubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`

            // if (useRouter().pathname == "/subsubcategory/[subsubcategory]") {
            //     if (typeof window !== "undefined") {
            //         for (let i = 0; i < state.value.length; i++) {
            //             if (state.value[i].label == "Subsub Categories") {
            //                 state.value[i].link == ""
            //                 state.value[i].link = `/subsubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`
            //             }
            //         }
            //     }
            // }
        },
        BacktoModels: (state, action) => {

            state.value.map(item => item.id === 4 ? item.link = `/subsubcategory/3rdSubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
            console.log("third")

            // state.value[3].link=`/subsubcategory/3rdSubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`

            // if (useRouter().pathname == "/subsubcategory/3rdSubcategory/[subsubsubcategory]") {
            //     if (typeof window !== "undefined") {
            //         for (let i = 0; i < state.value.length; i++) {
            //             if (state.value[i].label == "Back To Models") {
            //                 state.value[i].link == ""
            //                 state.value[i].link = `/subsubcategory/3rdSubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`
            //             }
            //         }
            //     }
            // }
        },
        clearLinks: (state, action) => {
            state.value[1].link = "";
            state.value[2].link = "";
            state.value[3].link = "";
        },
        clearSecondThirdLink: (state, action) => {
            state.value[2].link = "";
            state.value[3].link = "";
        },
        clearThirdLink: (state, action) => {
            state.value[3].link = "";
        },
        levelOneName: (state, action) => {
            state.value[1].label = action.payload;
        },
        levelTwoName: (state, action) => {
            state.value[2].label = action.payload;
        },
        levelThreeName: (state, action) => {
            state.value[3].label = action.payload;
        }
    },
});

export const { Subcategory, getState, Subsubcategory, BacktoModels, 
               clearLinks, clearSecondThirdLink, clearThirdLink, 
               levelOneName, levelTwoName, levelThreeName} = userSlice.actions;
export default userSlice.reducer;


