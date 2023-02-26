/** 
 * GET Dashboard
 */

exports.dashboard = async (req, res) => {
    const locals = {
        title: "Kezdőlap",
        description: "Erősziget Appilkáció csapattagok részére"
    }

    res.render('dashboard/index', {
        locals,
        layout:'../views/layouts/dashboard'
    })
}

