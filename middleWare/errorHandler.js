const {constants} = require("../constants");
const errorHandler = (err, req, res, next) =>{
     const statusCode = res.statusCode ? res.statusCode : 500; 
     switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message : err.message,
                stackTracer : err.stack,
        
             });
            
            break;
     
        case constants.NOT_FOUND:
                res.json({
                    title: "Not Found",
                    message : err.message,
                    stackTracer : err.stack,
            
                 });
                 break;

        case constants.FORBIDDEN:
                    res.json({
                        title: "Forbidden",
                        message : err.message,
                        stackTracer : err.stack,
                
                     });
                     break;

        case constants.UNATHORIZED:
                        res.json({
                            title: "Unathorized",
                            message : err.message,
                            stackTracer : err.stack,
                    
                         });
                         break;

        case constants.SERVER_ERROR:
                            res.json({
                                title: "server error",
                                message : err.message,
                                stackTracer : err.stack,
                        
                             });
                             break;

        default:
            console.log("NO error , ALL gud!!");
                                break;
        
     }
     
     
};

module.exports = errorHandler;