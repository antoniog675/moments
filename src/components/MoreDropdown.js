import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "../styles/MoreDropdown.module.css";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

export const MoreDropDown = ({handleEdit, handleDelete}) => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={ThreeDots}/>
        
            <Dropdown.Menu className="text-center">
                <Dropdown.Item 
                className={styles.DropDownItem} 
                onClick={handleEdit} 
                aria-label="edit">
                    <i className="fas fa-edit" />
                </Dropdown.Item>
                <Dropdown.Item
                className={styles.DropDownItem} 
                onClick={handleDelete}
                aria-label="delete"
                >
                    <i className="fas fa-trash-alt" />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};