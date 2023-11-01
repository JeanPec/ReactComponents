import {
    faComputerMouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import cn from "classnames";

import styles from "./NavTab.module.css";
import { NavTabsTitle } from "../../utils/types";
import { FlexContainer } from "../Container";

export interface RecipeResultProps {
    className?: string;
    title: string;
}

export const NavTab = ({ title, className }: RecipeResultProps) => {
    let route: string;
    let image: JSX.Element;

    switch (title) {
        case NavTabsTitle.Buttons:
            route = "buttons";
            image = <FontAwesomeIcon icon={faComputerMouse} />;
            break;
        default:
            route = "buttons";
            image = <FontAwesomeIcon icon={faComputerMouse} />;
            break;
    }

    return (
        <NavLink className={styles.navLink} to={route}>
            <FlexContainer fullHeight fullWidth align="center" justify="center" >
            {image}&nbsp;
            {title}
            </FlexContainer>
        </NavLink>
    );
};
