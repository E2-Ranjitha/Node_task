const db = require('../model/define');
const {Op} = require('sequelize');

const createStudent = (data)=>{
    console.log("createStudents: ",data);
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
    console.log("Data: ",data.TotalMArks);
    return new Promise((resolve, reject) => {
        db.findAll({
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

const categoryGood= ()=>{
    return new Promise((resolve, reject) => {
        db.findAll({
            // where : {
            //     TotalMArks : data.TotalMArks
            // }
            where: {
                TotalMArks: {
                    [Op.and]: {
                        [Op.gte]: 1000,
                        [Op.lt]: 1180
                    }
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

const categoryAverage= ()=>{
    return new Promise((resolve, reject) => {
        db.findAll({
            where: {
                TotalMArks: {
                  [Op.lt]: 1000 
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

/*
const category= (data)=>{
    const TotalMArks = data.TotalMArks;
    return new Promise((resolve, reject) => {
        db.findAll({
            where: {
                TotalMArks: {
                  [Op.lt]: 1000 
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
*/

module.exports = { createStudent,getStudents,categoryExcellent,categoryGood,categoryAverage}