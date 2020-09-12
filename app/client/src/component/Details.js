import React from 'react';

export default function Details({ array }) {
    console.log(array)

    return (
        <div>
            {array.map(item => {
                const color = item.type === '-' ? '#FFC0CB' : '#3CB371';
                return (
                    <div style={{ backgroundColor: color, marginBottom: '10px' }}>
                        <li key={item._id}>

                <h6><strong>{item.day}   {item.category}</strong></h6> - {item.description} -
                        <span style={{ marginLeft: '200px' }}>R$ {item.value + ',00'}</span>
                            <span style={{ float: 'right', cursor:'pointer' }}><i class="material-icons">delete</i></span>
                            <span style={{ float: 'right', cursor:'pointer' }}><i class="material-icons">edit</i></span>
                        </li>
                    </div>
                );
            })}
        </div>
    );
}