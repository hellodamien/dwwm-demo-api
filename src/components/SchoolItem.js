import React from "react";

function SchoolItem(props) {
    return (
        <li>
            {props.school.name}
        </li>
    );
}

export default SchoolItem;