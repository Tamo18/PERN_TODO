// const express = require("express");
// const cors = require("cors");
// const pool = require("./db");
import express from "express";
import cors from "cors";
import pg from "pg";



const app=express();

const db=new pg.Client({
    user: "postgres",
    password: "Yolo2001@18",
    host: "localhost",
    port: 5432,
    database: "todo_PERN"
})

db.connect();

app.use(cors());
app.use(express.json()); //req.body



app.post("/todos",async(req,res)=>{
    try {
        // console.log(req.body);
     const {description}=req.body;
     const newTodo=await db.query("INSERT INTO todo_item2 (description) VALUES ($1) RETURNING *",[description]);   
res.json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})


//get all todos
app.get("/todos",async(req,res)=>{
    try {
   const allTodos=await db.query("SELECT * FROM todo_item2");
    res.json(allTodos.rows)     
    } catch (error) {
        console.log(error.message); 
    }
    
})

//get a specific todo
app.get("/todos/:id",async(req,res)=>{
    try {
        const {id}=req.params;
    const parTodo=await db.query("SELECT * FROM todo_item2 WHERE id=($1)",[id])
    res.json(parTodo.rows[0]);        
    } catch (error) {
        console.log(error.message);
    }




// Update a todo

app.put("/todos/:id",async(req,res)=>{
    try {
    const {id}=req.params;    
    const {description}=req.body;    
const updateTodo=await db.query("UPDATE todo_item2 SET description=($1) WHERE id =($2)",[description,id]);
res.json("updated");
    } catch (error) {
        console.log(error.message);
    }
})
    
//delete a todo

app.delete("/todos/:id",async(req,res)=>{
    try {
    const {id}=req.params;
    const deletedTodo=await db.query("DELETE FROM todo_item2 WHERE id=($1)",[id]);
    res.json("deleted")    
    } catch (error) {
        console.log(error.message);
    }
})



})


app.listen(4000,()=>{
    console.log("The server is running on the port 4000")
})
