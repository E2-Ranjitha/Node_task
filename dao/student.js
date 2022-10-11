const db = require('../model/define');
const {Op} = require('sequelize');

const createStudent = (data)=>{
    return new Promise((resolve, reject) => {
        db.create(data).then(users => {
            resolve(users);
        }).
        catch(err => {
            reject (err);
            return;
        });
    });
}

const getStudents= ()=>{
    return new Promise((resolve, reject) => {
        db.findAll().then(users => {
            resolve(users);
        }).
        catch(err => {
            reject (err);
            return;
        });
    });
}

const categoryExcellent= (data)=>{
    return new Promise((resolve, reject) => {
        db.findAll({
            // where : {
            //     TotalMArks : data.TotalMArks
            // }
            where: {
                TotalMArks: {
                  [Op.gte]: 1180 
                }
              }
        }).then(users => {
            resolve(users);
        }).
        catch(err => {
            reject (err);
            return;
        });
    });
}

const categoryGood= (data)=>{
    return new Promise((resolve, reject) => {
        db.findAll({
            // where : {
            //     TotalMArks : data.TotalMArks
            // }
            where: {
                TotalMArks: {
                  [Op.gte]: 1150 
                }
              }
        }).then(users => {
            resolve(users);
        }).
        catch(err => {
            reject (err);
            return;
        });
    });
}

const categoryAverage= (data)=>{
    return new Promise((resolve, reject) => {
        db.findAll({
            // where : {
            //     TotalMArks : data.TotalMArks
            // }
            where: {
                TotalMArks: {
                  [Op.gte]: 1100 
                }
              }
        }).then(users => {
            resolve(users);
        }).
        catch(err => {
            reject (err);
            return;
        });
    });
}

module.exports = { createStudent,getStudents,categoryExcellent,categoryGood,categoryAverage}