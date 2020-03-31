const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name:Joi.string().require(),
        email:Joi.string().require().email(),
        whatsapp:Joi.string().require().min(10).max(11),
        uf:Joi.string().require().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrete({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page:joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id:Joi.number().required(),
    })
}), IncidentController.delete); 

module.exports = routes; 