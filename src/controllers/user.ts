import express from 'express';

exports.addMessage = (req : express.Request, res: express.Response) => {
    try{
        //destructure data from req.body
        const { conversation_id, message} = req.body;
    
        //validate conversation_id
        if(conversation_id.length < 1) return res.status(400).json({
            ErrorMessage: "Invalid 'response_id"
        })
    
    
        let response: string = "Sorry, I don't understant";
        let statusCode: number = 404;
    
        //remove special characters from the message
        const trimStr: string = message.replace(/[^a-zA-Z ]/g, "");
    
        //get first match context
        const regexp: string | RegExp = /\b(?:Hello|hi|Goodbye|bye)\b/gi;
        const matchArr: string[] | null = trimStr.match(regexp);
        const firstMatch: any = matchArr && matchArr[0].toLowerCase();
    
        //return response base on first context encounter
        if(['Hello', 'Hi'].map(str => str.toLowerCase()).includes(firstMatch)){
            statusCode = 200;
            response = 'Welcome, to StationFive.'
        }
    
        if(['Goodbye','bye'].map(str => str.toLowerCase()).includes(firstMatch)){
            statusCode = 200;
            response = 'Thank you, see you around.'
        }
    
        //initiate response data
        const resData = {
            response_id: conversation_id,
            response
        }
        
        //response to client side
        return res.status(statusCode).json(resData);
    }catch(err){
         return res.status(400).json(err);
    }
}

//can add all users controllers here...