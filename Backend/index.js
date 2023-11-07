const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql')

const app=express()

app.use(cors());
app.use(bodyParser.json());


//database connection

const dataBase=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'MTB',
   
});


//check database connection
dataBase.connect(err=>{
    if(err){console.log(err,"error in connection");
    }
    console.log("Database connected")
})


function handleConnection()
{
    const dataBase=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'MTB',
       
    });
    
    
    //check database connection
    dataBase.connect(err=>{
        if(err){console.log(err,"error in connection");
        }
        console.log("Database connected")
    })
    
}

//Get  data from the customer Table where username = req.username
app.get('/customer/:username',(req,res)=>{
    

   let userName=req.params.username
    let query=`select * from customer where username = "${userName}"`

    dataBase.query(query,(err,result)=>{
        if(err)
        {
            
           
            res.send({
                message:"Data not found",
                data:402 //
            });
        }
        if(result.length>0)
        {
            res.send({
                message:"single data customer data",
                data:result
            });
        }
        else
        {
            res.send({
                message:"Data not found",
                data:401
            });

        }
    });
});

//to get all movies from db
app.get('/movies',(req,res)=>{



    let query=`select * from movies`
    dataBase.query(query,(err,result)=>{
        if(err)
        {
            res.send({
                message:"Data not found",
                data:402 //
            });

        }
        if(result.length>0)
        {
            res.send({
                message:"movie data",
                data:result
            });

        }
    })



})

//get movies by cateogry ihome pageof customer
app.get('/movies/:category',(req,res)=>{
    
    let category=req.params.category
    let query=`select * from movies where movieGenere= "${category}" `
    dataBase.query(query,(err,result)=>{
        if(err)
        {
            res.send({
                message:"Data not found",
                data:402 //
            });

        }
        if(result.length>0)
        {
            res.send({
                message:"movie data",
                data:result
            });

        }
    })
})



//post requset to fill customer details
app.post('/customer',(req,res)=>{
   
    let userName=req.body.userName;
    let userPassword=req.body.userPassword;
    let userFullName=req.body.userFullName;
    let userAge=req.body.userAge;
    let userPhoneNumber=req.body.userPhoneNumber;
    let userMail=req.body.userMail;

    let query=`insert  into customer  (userFullName,userMail,userAge,userPassword,userPhoneNumber,userName)values('${userFullName}','${userMail}','${userAge}','${userPassword}','${userPhoneNumber}','${userName}')`

    
   
    
    dataBase.query(query,(err,result)=>{

        if(err)
        {
         
           // handleConnection();
            res.send(
                {
                    message:'DuplicateEntry',
                    data:401

                }
            )

           
        }
        else
        {
            res.send(
                {
                    message:'success',
                    data:200

                }
            )
        }   
    })
})

//get all the theaters in the location choosen by user and having user choosen movie
//get theater which have sepcific movie and location
app.get('/loctheater/:location/:movieId',(req,res)=>{

  let movieId=req.params.movieId
  let location=req.params.location
  let query=`select * from Theaters where movieId='${movieId}' and theaterCity='${location}'`

  dataBase.query(query,(err,result)=>{

    if(err)
    {
        res.send({
            data:400
        })
    }
    else if(result.length>0)
    {
        res.send({
            data:result
        })
    }
    else
    {
        res.send({
            data:401
        })

    }

    
  })
  




})




//get particular theater timing
app.get('/theatertime/:theaterId',(req,res)=>{


    let theaterId=req.params.theaterId;

    let query=`select * from theaterTiming  where theaterId='${theaterId}'`

    dataBase.query(query,(err,result)=>{



        if(err)
        {
            res.send({
                data:400
            })
        }
        if(result.length>0)
        {
            res.send({
                data:result
            })
        }
        else
        {
            res.send({
                data:400
            })
        }

        
    })



})




//post requset to fill owner details
app.post('/owner',(req,res)=>{
   
    let ownerUserName=req.body.ownerUserName;
    let ownerPassword=req.body.ownerPassword;
    let ownerName=req.body.ownerName;
    let ownerPhoneNumber=req.body.ownerPhoneNumber;
    let ownerGmail=req.body.ownerGmail;

    let query=`insert  into theaterOwner  (ownerUserName,ownerPassword,ownerName,ownerPhoneNumber,ownerGmail)values('${ownerUserName}','${ownerPassword}','${ownerName}','${ownerPhoneNumber}','${ownerGmail}')`

    
   
    
    dataBase.query(query,(err,result)=>{

        if(err)
        {
           
            res.send(
                {
                    message:'DuplicateEntry',
                    data:401

                }
            )
        }   
        else
        {
            res.send(
                {
                    message:'success',
                    data:200

                }
            )

        }
           

    })

   



})


//get single owner data
app.get('/owner/:ownerUserName',(req,res)=>{
    

    let userName=req.params.ownerUserName
     let query=`select * from theaterowner  where ownerUserName = "${userName}"`
 
     dataBase.query(query,(err,result)=>{
         if(err)
         {
             
            
             res.send({
                 message:"Error",
                 data:402 //
             });
         }
         if(result.length>0)
         {
             res.send({
                 message:"single data owner data",
                 data:result
             });
         }
         else
         {
             res.send({
                 message:"Data not found",
                 data:401
             });
 
         }
     });
 });
 

//get owners theater details
app.get('/theater/:ownerUserName',(req,res)=>{

    
    let userName=req.params.ownerUserName
     let query=`select * from theaters where ownerUserName = "${userName}"`
 
     dataBase.query(query,(err,result)=>{
         if(err)
         {
             res.send({
                 message:"Error",
                 data:402 //
             });
         }
         if(result.length>0)
         {
             res.send({
                 message:"Theater Data",
                 data:result
             });
         }
         else
         {
             res.send({
                 message:"Data not found",
                 data:401
             });
 
         }
     });

})


//get all timings from timing table
app.get('/time',(req,res)=>{

    let query='select * from timing';

    dataBase.query(query,(err,result)=>{

        if(err)
        {
            res.send({
                message:"Error",
                data:402 //
            });
        }
        if(result.length>0)
        {
            res.send({
                message:"timing Data",
                data:result
            });
        }

    })
})

//post request to add new theater into db

app.post('/theater/:ownerUsername/:theaterId',(req,res)=>{

  let ownerUserName=req.params.ownerUsername;
  let theaterId=req.params.theaterId;
  let theaterName=req.body.theaterName;
  let theaterCity=req.body.theaterCity;
  let threaterAdress=req.body.threaterAdress;
  let movieId=req.body.movieId;
  let theaterSeats=req.body.theaterSeats;
  let price=req.body.price


  let query=`insert into theaters (theaterId,theaterName,theaterCity,threaterAdress,ownerUserName,movieId,theaterSeats,price)values('${theaterId}','${theaterName}','${theaterCity}','${threaterAdress}','${ownerUserName}','${movieId}','${theaterSeats}','${price}')`

 
    dataBase.query(query,(err,result)=>{

        if(err)
        {
           
            res.send(
                {
                    message:'DuplicateEntry',
                    data:401

                }
            )
        }   
        else
        {
            res.send(
                {
                    message:'success',
                    data:200

                }
            )

        }
           

    })



})



//get all the cities to show it to owner
app.get('/city',(req,res)=>{

let query='select * from city';

dataBase.query(query,(err,result)=>{

    if(err)
    {
        res.send({
            message:"Error",
            data:402 //
        });
    }
    if(result.length>0)
    {
        res.send({
            message:"timing Data",
            data:result
        });
    }

})
})

//get max of theater Id for adding new theater

app.get('/theaterId',(req,res)=>{

    let query=`select MAX(theaterId)from theaters`
    
dataBase.query(query,(err,result)=>{

    if(err)
    {
        res.send({
            message:"Error",
            data:402 //
        });
    }
    if(result.length>0)
    {
        
        res.send({
            message:"timing Data",
            data:result
        });
    }

})
})

//ADD Theater timings in theatertiming table
app.post('/addtime',(req,res)=>{
  
    let theaterId=req.body.theaterId;
    let time=req.body.time;
    let currentSeats=req.body.currentSeats;

   let query=`insert into theatertiming (theaterId,time,currentSeats)values('${theaterId}','${time}','${currentSeats}')`

   dataBase.query(query,(err,result)=>{

    if(err)
    {
       
        res.send(
            {
                message:'error',
                data:401

            }
        )
    }   
    else
    {
        res.send(
            {
                message:'success',
                data:200

            }
        )

    }
       

    })



})


//putrequest to change seat of theater at particular time
app.put('/changeseat',(req,res)=>{

  let time=req.body.time;
  let theaterId=req.body.theaterId;
  let seat=req.body.seat;
   let query=`update theatertiming set currentSeats='${seat}' where time='${time}' and theaterId='${theaterId}'`

   dataBase.query(query,(err,result)=>{

    if(err)
    {
       
        res.send(
            {
                message:'error',
                data:401

            }
        )
    }   
    else
    {
        res.send(
            {
                message:'success',
                data:200

            }
        )

    }
    })

})


//get all timing and seat details for updation
app.get('/theatertime/:theaterId',(req,res)=>{



    let theaterId=req.params.theaterId;
    let query=`select * from theatertiming  where theaterId='${theaterId}'`

    if(err)
    {
        res.send({
            message:"Error",
            data:402 //
        });
    }
    if(result.length>0)
    {
        
        res.send({
            message:"timing Data",
            data:result
        });
    }

})

///putreq to change the price
app.put('/price/:theaterId',(req,res)=>{

   let price=req.body.price
   let theaterId=req.params.theaterId
    let query=`update  theaters set price='${price}' where  theaterId='${theaterId}'`


    dataBase.query(query,(err,result)=>{
    
        if(err)
        {
           
            res.send(
                {
                    message:'error',
                    data:401
        
                }
            )
        }   
        else
        {
            res.send(
                {
                    message:'success',
                    data:200
        
                }
             )
        
        }
    })

})

//putrequest to change movie in theater 
app.put('/changemovie',(req,res)=>{

    
    let theaterId=req.body.theaterId;
    let movieId=req.body.movieId;
    let query=`update theaters set movieId='${movieId}' where theaterId='${theaterId}'`
    
    dataBase.query(query,(err,result)=>{
    
    if(err)
    {
       
        res.send(
            {
                message:'error',
                data:401
    
            }
        )
    }   
    else
    {
        res.send(
            {
                message:'success',
                data:200
    
            }
         )
    
    }
 })
    
})




//putrequest to change theater seat in theatertable ( so its capacity)
app.put('/newtheaterseat',(req,res)=>{

    
    let theaterId=req.body.theaterId;
    let theaterSeats=req.body.theaterSeats;
    let query=`update theaters set theaterSeats='${theaterSeats}' where theaterId='${theaterId}'`
    
    dataBase.query(query,(err,result)=>{
    
    if(err)
    {
       
        res.send(
            {
                message:'error',
                data:401
    
            }
        )
    }   
    else
    {
        res.send(
            {
                message:'success',
                data:200
    
            }
         )
    
    }
 })
    
})

//get request  to obtain movie name running in the theater
app.get('/currentmovie/:theaterId',(req,res)=>{
    let theaterId=req.params.theaterId
    let query=`select * from movies,theaters where theaters.movieId=movies.movieId and theaterId='${theaterId}' `
    
    dataBase.query(query,(err,result)=>{
    
        if(err)
        {
            res.send({
                message:"Error",
                data:402 //
            });
        }
        if(result.length>0)
        {
            
            res.send({
                message:"movie Name",
                data:result
            });
        }
    
    })

})


//put request to change address of theater
app.put('/changeaddress',(req,res)=>{

    
    let theaterId=req.body.theaterId;
    let threaterAdress=req.body.threaterAdress; 
    let query=`update theaters set threaterAdress='${threaterAdress}' where theaterId='${theaterId}'`
    
    dataBase.query(query,(err,result)=>{
    
    if(err)
    {
       
        res.send(
            {
                message:'error',
                data:401
    
            }
        )
    }   
    else
    {
        res.send(
            {
                message:'success',
                data:200
    
            }
         )
    
    }
 })
    
})




//put request to change the name of the theater
app.put('/changetheatername',(req,res)=>{

    
    let theaterId=req.body.theaterId;
    let theaterName=req.body.theaterName; 
    let query=`update theaters set theaterName='${theaterName}' where theaterId='${theaterId}'`
    
    dataBase.query(query,(err,result)=>{
    
    if(err)
    {
       
        res.send(
            {
                message:'error',
                data:401
    
            }
        )
    }   
    else
    {
        res.send(
            {
                message:'success',
                data:200
    
            }
         )
    
    }
 })
    
})


//delete timing from table  for theater before updating movie
app.delete('/deletetime/:theaterId',(req,res)=>{

    let theaterId=req.params.theaterId
    let query=`delete from  theatertiming where theaterId='${theaterId}'`
    dataBase.query(query,(err,result)=>{
    
        if(err)
        {
            
           
            res.send(
                {
                    message:'error',
                    data:401
        
                }
            )
        }   
        else
        {
            res.send(
                {
                    message:'success',
                    data:200
        
                }
             )
        
        }
     })

})


//delete theaters wrt theaterid
app.delete('/deletetheater/:theaterId',(req,res)=>{
 
    let theaterId=req.params.theaterId;
    let query=`delete from theaters where theaterId='${theaterId}'`

    dataBase.query(query,(err,result)=>{
    
        if(err)
        {
           
            res.send(
                {
                    message:'error',
                    data:401
        
                }
            )
        }   
        else
        {
            res.send(
                {
                    message:'success',
                    data:200
        
                }
             )
        
        }
     })

    

})

//insert new data into booking , new ticket booked

app.post('/book',(req,res)=>{

    console.log(req.body)
 
    let bookingId=req.body.bookingId
    let movieId=req.body.movieId
    let userName=req.body.userName
    let numberOfSeats=req.body.numberOfSeats
    let theaterId=req.body.theaterId
    let date=req.body.date
    let price=req.body.price

    let query=`insert into bookings(bookingId,movieId,theaterId,userName,numberOfSeats,date,price)values('${bookingId}','${movieId}','${theaterId}','${userName}','${numberOfSeats}','${date}','${price}')`

    dataBase.query(query,(err,result)=>{

        if(err)
        {
           
           
            res.send(
                {
                    message:'error',
                    data:401
    
                }
            )
        }   
        else
        {
            res.send(
                {
                    message:'success',
                    data:200
    
                }
            )
    
        }
        })
})


// get max booking ID inorder to ennnter new booking into table
app.get('/maxbookingid',(req,res)=>{

    let query=`select MAX(bookingId)from bookings`
    
dataBase.query(query,(err,result)=>{

    if(err)
    {
        res.send({
            message:"Error",
            data:402 //
        });
    }
    if(result.length>0)
    {
        
        res.send({
            message:"bookingID",
            data:result
        });
    }

})
})
//-----------------------------------------------------------------all related to getting booking deatils for customer
//when customer clicks booking history button

//get booking details of customer

app.get('/bookCustomer/:userName',(req,res)=>{

let userName=req.params.userName
    let query=`select * from bookings where userName='${userName}'`

    dataBase.query(query,(err,result)=>{
        if(err)
        {
            res.send({
                data:400
            })
        }
        if(result.length>0)
        {
            res.send({
                data:result
            })
        }
        else
        {
            res.send({
                data:400
            })
        }


    })

})


//get movie name through movie id
app.get('/moviename/:movieId',(req,res)=>{

    movieId=req.params.movieId
    let query=  `select movieName from movies where movieId='${movieId}'`

    dataBase.query(query,(err,result)=>{


        if(err)
        {
            res.send({
                data:400
            })
        }
        if(result.length>0)
        {
            res.send({
                data:result
            })
        }
        else
        {
            res.send({
                data:400
            })
        }


    })
})


//get theatername

app.get('/theatername/:theaterId',(req,res)=>{

    theaterId=req.params.theaterId
    let query=  `select theaterName from  theaters where theaterId='${theaterId}'`

    dataBase.query(query,(err,result)=>{


        if(err)
        {
            res.send({
                data:400
            })
        }
        if(result.length>0)
        {
            res.send({
                data:result
            })
        }
        else
        {
            res.send({
                data:400
            })
        }


    })
})














//----------------------------------------------
//program to get booking wrt to theater
app.get('/bookTheater/:theaterId',(req,res)=>{

   let theaterId=req.params.theaterId
    let query=`select * from  bookings where theaterId='${theaterId}'`

    dataBase.query(query,(err,result)=>{
        if(err)
        {
            res.send({
                data:400
            })
        }
        if(result.length>0)
        {
            res.send({
                data:result
            })
        }
        else
        {
            res.send({
                data:400
            })
        }


    })
})

//get specific customer details

app.get('/customerdetails/:userName',(req,res)=>{


    let userName=req.params.userName;

    let query=`select * from customer where userName='${userName}'`

    dataBase.query(query,(err,result)=>{
        if(err)
        {
            res.send({
                data:400
            })
        }
        if(result.length>0)
        {
            res.send({
                data:result
            })
        }
        else
        {
            res.send({
                data:400
            })
        }


    })





})
app.listen(3000,()=>{
    console.log("server is ready")

})



