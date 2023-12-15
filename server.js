const express=require("express");
const app=express();
const PORT=process.env.PORT|| 3000;
const sendEmail=require('./utils/sendEmail');

// set engine
app.set('view engine','ejs');

// serve static  assets
app.use (express.static("public"));    // whatever we placed inside the public folder is served by the server

// pass the data from form
app.use(express.urlencoded({extended:false}));

// route to render email form
app.get("/",(req,res)=>{
    res.render('email-form')
});



// route to send the email
app.post("/send-email",async (req,res)=>{
    const {email,message}=req.body;
    try {
        sendEmail(email,message);
        res.render('email-form',{
            status:'Success',
            message:'Email sent successfully',
        })
    } catch (error) {
        console.log(error);
        res.render('email-form',{
            status:'Error',
            message:'Error sending email',
        });
    }
})






// listen to port or run server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});