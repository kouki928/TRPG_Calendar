/* express関係の処理 -------------------------------------------------- */
var express = require('express');
var router = express.Router();


/* DB設定の初期化 -------------------------------------------------------------- */
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('../public/jsons/trpger-calendar-firebase-adminsdk-3emxh-1e83371f31.json');

initializeApp({
  credential: cert(serviceAccount)
});


/* 使うDBを取得 ------------------------------------------------------- */
const db = getFirestore();
const UserDB = db.collection("User");
// const CalendarDB = db.collection("Calendar");


/* その他変数 --------------------------------------------------------- */
let bAuth = true;
// const aUserIds = await UserDB.where("userId", "==", )


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('<h1>This is Express.js</h1>');
  if (bAuth){
    res.render("index",{
      title : "express"
    });
  }else{
    res.render("SignUp");
  }
});

module.exports = router;
