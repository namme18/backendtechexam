const Ajv = require("ajv");
import express from "express";

const jsonValidator = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
            const ajv = new Ajv();

            const schema = {
                type: 'object',
                properties:{
                    conversation_id: { type: 'string' },
                    message: { type: 'string' }
                },
                required: ['conversation_id', 'message'],
                additionalProperties: false
            }

            const validate = ajv.compile(schema);

            const valid = validate(req.body);

            if(valid) return next();

            if(!valid) return res.status(400).json({ErrorMessage: validate.errors[0].message});

    }catch(err){
        return res.status(400).json(err);
    }
}

module.exports = jsonValidator;
