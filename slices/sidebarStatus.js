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
            { id: 1, label: "Home", icon: HomeIcon, link: "/" },
            { id: 2, label: "Subcategory", icon: ArticleIcon, link: "" },
            { id: 3, label: "Subsub Categories", icon: UsersIcon, link: "" },
            { id: 4, label: "Back To Models", icon: VideosIcon, link: "" }
        ]
    },
    reducers: {
        getState: (state, action) => {
            state.value = action.payload
        },
        Subcategory: (state, action) => {

// console.log(action.payload)

state.value.map(item=>item.id===2 ? item.link=`/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
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

            state.value.map(item=>item.id===3 ? item.link=`/subsubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
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

            state.value.map(item=>item.id===4 ? item.link=`/subsubcategory/3rdSubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
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


    },
});

export const { Subcategory, getState, Subsubcategory, BacktoModels } = userSlice.actions;
export default userSlice.reducer;


