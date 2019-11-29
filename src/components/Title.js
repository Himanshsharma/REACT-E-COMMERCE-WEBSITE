import React, { Component } from 'react';
export default function Title({name,title}){
    return(
        <div className="row">
        <div className="mx-auto col-10 text-title my-2 text-center">
        <h1 className="text-capitalize font-weight-bold">
        {name} <strong style={{color:'#2a2a72'}}>{title}</strong></h1>
        </div>
        </div>
    )
}