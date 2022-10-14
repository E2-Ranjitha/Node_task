const dao = require('../dao/student');
const students = require('../model/define');
const response = require('../utility/response');

const createStudent = async (req,res)=>{
    
    // const FirstName = req.body.FirstName;
    // const LastName = req.body.LastName;
    // const Class = req.body.Class;
    // const TotalMArks = req.body.TotalMArks;
    try{
        const user = await dao.createStudent(req.body);
        res.send(response.successResponse(user,"Student created successfully"));
    }
    catch(err){
        console.log('error: ',err);
        res.send(response.failureResponse("Error while creating student"));
    }
    
}

const getStudents = async (req,res)=>{
    try{
        const user = await dao.getStudents();
        res.send(response.successResponse(user,"Students fetched successfully"));
    }
    catch(err){
        console.log('error: ',err);
        res.send(response.failureResponse("Error while fetching student"));
    }
}

const category = async (req,res)=>{
    try{
        const TotalMArks = req.body.TotalMArks ; 
        //const student = await dao.category(req.body);
            console.log("MArks: ",TotalMArks);
        if(TotalMArks == "excellent"){
            const student = await dao.categoryExcellent(req.body);
            res.send(response.successResponse(student,"Excellent Students fetched successfully"));
        }else if(TotalMArks == 'good'){
            const student = await dao.categoryGood();
            res.send(response.successResponse(student,"Good Students fetched successfully"));
        }else if(TotalMArks == 'average'){
            const student = await dao.categoryAverage();
            res.send(response.successResponse(student,"Average Students fetched successfully"));
        }
    }
    catch(err){
        res.send(response.failureResponse("Error while fetching student"));
        console.log("category error",err);
    }
}


module.exports = { createStudent,getStudents,category}