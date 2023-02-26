/** 
 * GET Homepage
 */

exports.homepage = async (req, res) => {
    const locals = {
        title: "Erősziget App",
        description: "Erősziget Applikáció csapattagok részére"
    }

    res.render('index', {
        locals,
        layout:'../views/layouts/front-page'
    })
}

/** 
 * GET About
 */

exports.about = async (req, res) => {
    const locals = {
        title: "About - Nodejs Notes",
        description: "Free NodeJs Notes App"
    }

    res.render('about', locals)
}