let express = require ('express');
let app = express();
const path = require ('path');
let mongoose = require("mongoose");
var Schema = mongoose.Schema;
console.log("Hello");

// staic route
app.use(express.static(path.join(__dirname, './public/dist')));

// body
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// morgan
let morgan = require('morgan');
app.use(morgan('dev'));

// mongoose

let PollSchema = new mongoose.Schema({
 question: { type: String, required: true },
 option1: { type: String, required: true },
 option2: { type: String, required: true },
 option3: { type: String, required: true },
 option4: { type: String, required: true },
 vote: { type: Number},
 // _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 // created_at: {type: Date , required: true },
}, {timestamps: true });


mongoose.connect('mongodb://localhost/exam_db');
mongoose.model('Poll', PollSchema);
var Poll = mongoose.model('Poll');

// routes
app.get('/polls', (req,res,next) => {
  console.log("Server > GET 'polls' ");
  Poll.find({}, (err,polls) => {
    if(err) {
      console.log('something went wrong in GET users');
    }
    else {
      console.log('successfull!');
      // res.render('index', {posts:posts});
      return res.json(polls);
    }
 })
})

app.post('/polls', (req,res,next) => {
  delete req.body._id;
  console.log("Server > POST 'polls' ", req.body);
  Poll.create(req.body, (err,poll) => {
    if(err) {
      console.log("error in create");
      return res.json(err)
    }
    else{
      console.log("success in post create");
      return res.json(poll)
    };

    })
  })

app.delete("/polls/:id" ,(req,res,next) => {
  console.log("Server > Delete '/polls/:id' > id:", req.params.id);
  Poll.deleteOne({_id:req.params.id}, (err,data) => {
    if(err) {
      console.log("error in DELETE");
      return res.json(err)
    }
    else{
      console.log("success in Delete");
      return res.json(true)
    };

    })
  })

app.get("/polls/:id" , (req,res,next) => {
  console.log("Server > EDIT '/polls/:id' > id:", req.params.id);
  Poll.findOne({_id:req.params.id} , req.body , (err,data) =>{
    if (err){
      console.log("error in show detail");
      return res.json(err)
  }
  else
    {
      console.log("success in show detail");
      return res.json(true)
    };
  })
})

app.all("*", (req,res,next) => {
  res.sendfile(path.resolve("./public/dist/index.html"))
})


//listinengin port
app.listen(8000, function() {
    console.log("listening on port 8000");
})
