import React from "react";
import { useState, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, postDog} from '../redux/actions'


export default function CreateDog(){
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const temper= useSelector(state => state.tempers)
}