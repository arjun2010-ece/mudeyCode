import React from 'react'

export const NestedLists = ({filteredData}) => {
    return (
        <ul data-testid="top_lists">
            {filteredData && filteredData.map((m,i) => {
                return (
               <li key={i} data-testid = {i}>
                 {m.id}
                 {m.children && <NestedLists filteredData={m.children} />}
                </li>
        );
      })}
        </ul>
    )
}
