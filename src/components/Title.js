import React, { Component } from 'react';
export default function Title({name,title}){
    return(
        <div className="row">
        <div className="mx-auto col-10 text-title my-2 text-center">
        <h1 className="text-capitalise font-weight-bold">
        {name} <strong className="text-blue">{title}</strong></h1>
        
        </div>
        </div>
    )
}