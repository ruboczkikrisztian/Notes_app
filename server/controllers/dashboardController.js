const Note = require('../models/Notes');
const mongoose = require('mongoose');

/** 
 * GET Dashboard
 */

exports.dashboard = async (req, res) => {
        const locals = {
        title: "Kezdőlap",
        description: "Erősziget Appilkáció csapattagok részére"
    }

    try {
        const notes = await Note.find({});
        res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes,
            layout: '../views/layouts/dashboard'
        }) 
    

    } catch (error) {
        
    }

   
}