import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, useEffect,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Subcategory, Subsubcategory, BacktoModels } from "../slices/sidebarStatus";
// import { updateFirst  } from "../slices/first";
// import { updateSecond } from "../slices/second";
// import { updateThird} from "../slices/third";

import {
  // ArticleIcon,
  CollapsIcon,
  // HomeIcon,
  LogoIcon,
  LogoutIcon,
  // UsersIcon,
  // VideosIcon,
} from "./icons";



const Sidebar = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state) => state.status.value);
console.log(menuItems)

// var first = useSelector((state) => state.firstStatus.value);
// var second = useSelector((state) => state.secondStatus.value);
// var third = useSelector((state) => state.thirdStatus.value);


  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();
  // let subcategory=false;


  // useEffect(() => {
  //  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  // menuItems = useSelector((state) => state.status.value);
  //   console.log(menuItems)
  // }, []);

  // menuItems = [
  //   { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  //   { id: 2, label: "Subcategory", icon: ArticleIcon, link: "/[subcategory]" },
  //   { id: 3, label: "Subsub Categories", icon: UsersIcon, link: "/subsubcategory/[subsubcategory]" },
  //   { id: 4, label: "Back To Models", icon: VideosIcon, link: "/subsubcategory/3rdSubcategory/[subsubsubcategory]" },
  // ];
  // console.log(menuItems)

 
//   useEffect(() => {

// if(first){
//   dispatch(updateFirst(false))
//   if (router.pathname === "/[subcategory]") {
//     if (typeof window !== "undefined") {
//       for (let i = 0; i < menuItems.length; i++) {
//         if (menuItems[i].label === "Subcategory") {
//           dispatch(Subcategory())
//             // menuItems[i].link = `/${(window.location.href.match(/([^\/]*)\/*$/)[1])}`
//         }
//     }

//     }
//   }
//   console.log(first,"first one")

// }
  


// if(second){
//   dispatch(updateSecond(false))
//   if (router.pathname === "/subsubcategory/[subsubcategory]") {
//     if (typeof window !== "undefined") {

//       for (let i = 0; i < menuItems.length; i++) {
//         if (menuItems[i].label === "Subsub Categories") {
//           dispatch(Subsubcategory())

//         }
//     }

//     }
//   }    console.log(second,"second one")
// }

//   if(third){
//     dispatch(updateThird(false))
//   if (router.pathname === "/subsubcategory/3rdSubcategory/[subsubsubcategory]") {
//     if (typeof window !== "undefined") {
//       for (let i = 0; i < menuItems.length; i++) {
//         if (menuItems[i].label === "Back To Models") {
//           dispatch(BacktoModels())
//         }
//     }

//     }
//   }    console.log(third,"third one")
// }
// })

  // const activeMenu = useMemo(
  //   () => menuItems.find((menu) => menu.link === router.pathname),
  //   [menuItems, router.pathname]
  // );
  const wrapperClasses = classNames(
    "-my-8 px-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "pl-5 rounded bg-light-lighter right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        // ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
    // console.log(activeMenu)
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s", backgroundColor: "#f15d22" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center mx-auto py-5 gap-4">
            <LogoIcon />

            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span>
          </div>
          <div>
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <CollapsIcon />
              </button>
            )}
          </div>

        </div>

        <div className="flex flex-col items-start mt-20">
            {/* // .filter(item=>subcategory ? item.label!=="Subcategory" : item) */}

            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div key={menu.label} className={classes}>
                  <Link href={menu.link}>
                    <a className="flex py-6  px-3 items-center w-full h-full">
                      <div style={{ width: "2.5rem" }}>
                        <Icon />
                      </div>
                      {!toggleCollapse && (
                        <span
                          className={classNames(
                            "text-md font-medium text-text-light"
                          )}
                        >
                          {menu.label}
                        </span>
                      )}
                    </a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
