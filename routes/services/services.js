module.exports = function(app)
{
    app.get("/services", function(req, res) {
        res.render('services',{
            isSubmitted:false,
            isSubscribed:false
        });
    });
}